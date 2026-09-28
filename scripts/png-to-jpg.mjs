// Convertit les photos PNG de src/assets/photos en JPEG (qualité 85, 2000 px max).
// Usage : node scripts/png-to-jpg.mjs
import sharp from "sharp";
import { readdirSync, unlinkSync, statSync } from "node:fs";
import { join } from "node:path";

const dir = "src/assets/photos";
for (const f of readdirSync(dir).filter((x) => x.endsWith(".png"))) {
  const src = join(dir, f);
  const dst = join(dir, f.replace(/\.png$/, ".jpg"));
  const before = statSync(src).size;
  await sharp(src)
    .flatten({ background: "#ffffff" })
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(dst);
  unlinkSync(src);
  console.log(`${f} : ${Math.round(before / 1024)} Ko → ${Math.round(statSync(dst).size / 1024)} Ko`);
}
