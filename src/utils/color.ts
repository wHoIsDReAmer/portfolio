function getHash(name: string) {
  return name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function getGradientColor1(hash: number) {
  const r = 0 + (hash % 50);
  const g = 130 + (hash % 40);
  const b = 160 + (hash % 30);

  return `rgb(${r}, ${g}, ${b})`;
}

function getGradientColor2(hash: number) {
  const r = 71 + (hash % 40);
  const g = 150 + (hash % 30);
  const b = 180 + (hash % 20);

  return `rgb(${r}, ${g}, ${b})`;
}

export function getColorFromName(name: string) {
  const hash = getHash(name);
  const r = (hash * 123) % 256;
  const g = (hash * 456) % 256; 
  const b = (hash * 789) % 256;

  return `${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

export function getGradientColor(name: string) {
    const hash = getHash(name);
    const color1 = getGradientColor1(hash);
    const color2 = getGradientColor2(hash);

    return `linear-gradient(135deg, ${color1}, ${color2})`;
}