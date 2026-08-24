#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

const FILE = new URL('../src/constants/albums.ts', import.meta.url);
const DRY = process.argv.includes('--dry');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9가-힣]/g, '');

async function fromDeezer(artist, title) {
	const strict = `artist:"${artist}" album:"${title}"`;
	for (const q of [strict, `${artist} ${title}`]) {
		const res = await fetch(`https://api.deezer.com/search/album?q=${encodeURIComponent(q)}&limit=5`);
		if (!res.ok) continue;

		const { data } = await res.json();
		if (!data?.length) continue;

		const exact = data.find((d) => norm(d.title) === norm(title));
		const hit = exact ?? data[0];
		if (hit?.cover_big) return { url: hit.cover_big, source: 'deezer', matched: `${hit.artist?.name} — ${hit.title}` };

		await sleep(400);
	}
	return null;
}

async function fromItunes(artist, title) {
	const term = encodeURIComponent(`${artist} ${title}`);
	const res = await fetch(`https://itunes.apple.com/search?term=${term}&entity=album&limit=1&country=KR`);
	if (!res.ok) return null;

	const { results } = await res.json();
	const hit = results?.[0];
	if (!hit?.artworkUrl100) return null;

	return {
		url: hit.artworkUrl100.replace(/\/\d+x\d+bb\.jpg$/, '/600x600bb.jpg'),
		source: 'itunes',
		matched: `${hit.artistName} — ${hit.collectionName}`,
	};
}

const source = await readFile(FILE, 'utf8');

const entries = [
	...source.matchAll(/title:\s*'([^']+)',\s*\n\s*artist:\s*'([^']+)',/g),
].map((m) => ({ title: m[1], artist: m[2], index: m.index }));

if (entries.length === 0) {
	console.error('albums.ts 에서 앨범을 찾지 못했습니다.');
	process.exit(1);
}

let output = source;
let offset = 0;
let filled = 0;

for (const { title, artist, index } of entries) {
	// 이미 채워져 있으면 건너뛴다.
	const slot = output.indexOf('coverUrl:', index + offset);
	if (slot !== -1 && !output.startsWith('coverUrl: null,', slot)) {
		console.log(`  · ${artist} — ${title}: 이미 있음`);
		continue;
	}

	let hit = null;
	try {
		hit = (await fromDeezer(artist, title)) ?? (await fromItunes(artist, title));
	} catch (error) {
		console.warn(`  ! ${artist} — ${title}: ${error.message}`);
		continue;
	}

	if (!hit) {
		console.warn(`  ? ${artist} — ${title}: 못 찾음 (그라디언트로 표시됨)`);
		continue;
	}

	console.log(`  ✓ ${artist} — ${title}  [${hit.source}] ${hit.matched}`);
	filled += 1;

	if (DRY) continue;

	const target = 'coverUrl: null,';
	const at = output.indexOf(target, index + offset);
	if (at === -1) continue;

	const replacement = `coverUrl: '${hit.url}',`;
	output = output.slice(0, at) + replacement + output.slice(at + target.length);
	offset += replacement.length - target.length;

	await sleep(600);
}

if (!DRY && filled > 0) {
	await writeFile(FILE, output);
	console.log(`\n${filled}개 커버를 albums.ts 에 기록했습니다.`);
} else {
	console.log(`\n${filled}개 커버를 찾았습니다.${DRY ? ' (파일은 수정하지 않음)' : ''}`);
}
