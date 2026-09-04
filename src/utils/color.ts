/**
 * 이름 → 이미지 없는 항목의 폴백 배경색.
 *
 * 그라디언트 대신 단색. 색은 사이트 강조색 대역(테라코타 #b0450f / #f0894a ~
 * 선반 나무색 #c0a274) 안에서만 고르고, 채도는 낮게 눌러 배경에 얹힌 색지처럼 보이게 한다.
 */
const HUE_BASE = 11; // 테라코타(#b0450f 계열)
const HUE_SPAN = 25; // 11° ~ 35°. 상한은 선반 나무색(#c0a274)이고, 그 위는 올리브로 빠진다.

// FNV-1a. 문자코드 단순 합은 순서를 무시해 애너그램이 같은 색이 된다.
function getHash(name: string) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < name.length; i += 1) {
    hash ^= name.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return hash >>> 0;
}

export function getFallbackColor(name: string) {
  const hash = getHash(name);

  const hue = HUE_BASE + (hash % HUE_SPAN);
  const saturation = 32 + ((hash >>> 8) % 11); // 32 ~ 42%. 더 올리면 단색이 튄다.
  // 36~54%: 크림(#fbfaf8)·먹색(#121212) 어느 배경에서도 묻히지 않는 구간.
  // 색상 대역이 좁으므로 항목 간 구분은 주로 이 명도 차이가 만든다.
  const lightness = 36 + ((hash >>> 16) % 19);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}