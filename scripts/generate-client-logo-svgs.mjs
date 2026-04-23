/**
 * One-off placeholder marks (white text on transparent) for /logos/brands/clients/*.svg
 * Replace with official vector marks when you have license-ready assets.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'logos', 'brands', 'clients');

const brands = [
	{ slug: 'coca-cola', label: 'Coca-Cola' },
	{ slug: 'mcdonalds', label: "McDonald's" },
	{ slug: 'fifco', label: 'FIFCO' },
	{ slug: 'imperial', label: 'Imperial' },
	{ slug: 'pilsen', label: 'Pilsen' },
	{ slug: 'sony-music', label: 'Sony Music' },
	{ slug: 'kfc', label: 'KFC' },
	{ slug: 'taco-bell', label: 'Taco Bell' },
	{ slug: 'popeyes', label: 'Popeyes' },
	{ slug: 'burger-king', label: 'Burger King' },
	{ slug: 'monster-energy', label: 'Monster Energy' },
	{ slug: 'pepsi', label: 'Pepsi' },
	{ slug: 'dominos', label: "Domino's" },
	{ slug: 'claro', label: 'Claro' },
	{ slug: 'sneax', label: 'Sneax' },
	{ slug: 'lays', label: "Lay's" },
	{ slug: 'converse', label: 'Converse' },
	{ slug: 'uber', label: 'Uber' },
	{ slug: 'fanta', label: 'Fanta' },
	{ slug: 'kotex', label: 'Kotex' },
	{ slug: 'schweppes', label: 'Schweppes' },
	{ slug: 'takis', label: 'Takis' },
	{ slug: 'pozuelo', label: 'Pozuelo' },
	{ slug: 'jet', label: 'Jet' },
	{ slug: 'dos-pinos', label: 'Dos Pinos' },
	{ slug: 'trident', label: 'Trident' },
	{ slug: 'lili-pink', label: 'Lili Pink' },
	{ slug: 'choys', label: "Choy's" },
	{ slug: 'pringles', label: 'Pringles' },
	{ slug: 'bamboo', label: 'BAMBOO' },
	{ slug: 'rock', label: 'Rock' },
	{ slug: 'banco-nacional', label: 'Banco Nacional' },
	{ slug: 'liberty', label: 'Liberty' },
	{ slug: 'masxmenos', label: 'Masxmenos' },
	{ slug: 'aspirin', label: 'Aspirin' },
	{ slug: 'maxxx-energy', label: 'Maxxx Energy' },
	{ slug: 'alka-seltzer', label: 'Alka-Seltzer' },
	{ slug: 'ambacar', label: 'ambacar' },
];

function escapeXml(s) {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function fontSizeFor(label) {
	const n = label.length;
	if (n > 22) return 9;
	if (n > 16) return 10;
	if (n > 12) return 11;
	return 12;
}

fs.mkdirSync(outDir, { recursive: true });

for (const { slug, label } of brands) {
	const fsz = fontSizeFor(label);
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" role="img" aria-label="${escapeXml(label)}">
  <text x="100" y="30" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="${fsz}" font-weight="600" letter-spacing="0.02em">${escapeXml(label)}</text>
</svg>
`;
	fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg, 'utf8');
}

console.log(`Wrote ${brands.length} SVGs to ${path.relative(root, outDir)}`);
