// Génère public/og.png (1200×630), l'image affichée lors d'un partage du site.
// Usage : node scripts/og-image.mjs
import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="15%" r="70%">
      <stop offset="0" stop-color="#1f5fd1"/>
      <stop offset="1" stop-color="#12306b"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1080" cy="110" r="46" fill="#d81e6c"/>
  <circle cx="1128" cy="200" r="20" fill="#a8c82f"/>

  <g transform="translate(80 80)">
    <rect width="72" height="72" rx="20" fill="#ffffff"/>
    <path d="M18 50V22l18 18 18-18v28" fill="none" stroke="#1f5fd1" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="96" y="50" font-family="Segoe UI, Arial, sans-serif" font-size="40" font-weight="700" fill="#ffffff">Neo<tspan fill="#9dbcf3">Clean</tspan></text>
  </g>

  <text font-family="Segoe UI, Arial, sans-serif" font-weight="700" fill="#ffffff" font-size="72" letter-spacing="-2">
    <tspan x="80" y="300">Des locaux propres</tspan>
    <tspan x="80" y="385">chaque matin.</tspan>
  </text>
  <text x="80" y="460" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#d6e2fb">
    Nettoyage de bureaux, commerces et copropriétés
  </text>
  <text x="80" y="502" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#d6e2fb">
    à Paris et en Île-de-France
  </text>

  <g transform="translate(80 540)">
    <rect width="330" height="54" rx="27" fill="#d81e6c"/>
    <text x="165" y="36" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff">Devis gratuit sous 24 h</text>
  </g>
  <text x="1120" y="580" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" fill="#ffffff">neo-clean.fr</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("public/og.png généré");
