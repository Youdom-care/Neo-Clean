// Planche contact des photos téléchargées (outil interne de tri).
// Usage : node scripts/contact-sheet.mjs <dossier> <sortie.png>
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const [dir = "photos-originales", out = "contact-sheet.png"] = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const W = 300, H = 200, LBL = 26, COLS = 6;
const rows = Math.ceil(files.length / COLS);
const tiles = [];
for (const [i, f] of files.entries()) {
  const img = await sharp(join(dir, f)).resize(W, H, { fit: "contain", background: "#eeeeee" }).png().toBuffer();
  const meta = await sharp(join(dir, f)).metadata();
  const label = Buffer.from(
    `<svg width="${W}" height="${LBL}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="18" font-family="Arial" font-size="15" fill="#fff">${f} ${meta.width}x${meta.height}</text></svg>`,
  );
  const x = (i % COLS) * W, y = Math.floor(i / COLS) * (H + LBL);
  tiles.push({ input: img, left: x, top: y }, { input: label, left: x, top: y + H });
}
await sharp({ create: { width: COLS * W, height: rows * (H + LBL), channels: 3, background: "#ffffff" } })
  .composite(tiles)
  .png()
  .toFile(out);
console.log(out);
