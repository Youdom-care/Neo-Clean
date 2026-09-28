// Compte les mots du contenu principal (<main>) de chaque page générée dans dist/.
// Usage : npm run build puis node scripts/word-count.mjs [minimum]
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const min = Number(process.argv[2] ?? 1200);
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

const rows = walk("dist").map((file) => {
  const html = readFileSync(file, "utf8");
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [, ""])[1];
  const text = main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  const words = text.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;
  const page = file.replace(/^dist[\\/]/, "/").replace(/index\.html$/, "").replace(/\\/g, "/");
  return { page, words };
});

rows.sort((a, b) => a.words - b.words);
for (const r of rows) console.log(`${r.words >= min ? "OK " : "-- "} ${String(r.words).padStart(5)}  ${r.page}`);
const under = rows.filter((r) => r.words < min);
console.log(`\n${rows.length - under.length}/${rows.length} pages ≥ ${min} mots`);
