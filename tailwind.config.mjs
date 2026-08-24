/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--bg)',
				fg: 'var(--fg)',
				muted: 'var(--muted)',
				line: 'var(--line)',
				accent: 'var(--accent)',
				card: 'var(--card)',
			},
			fontFamily: {
				sans: 'var(--font-sans)',
			},
			maxWidth: {
				content: 'var(--content)',
			},
		},
	},
	plugins: [],
}
