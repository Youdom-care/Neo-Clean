// Audit SEO des pages générées dans dist/ : titres, descriptions, H1, images,
// liens internes entrants, données structurées. Usage : npm run build puis
// node scripts/seo-audit.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

const decode = (s) => s.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"');
const pages = walk("dist")
  .filter((f) => !/404\.html$/.test(f))
  .map((file) => {
    const html = readFileSync(file, "utf8");
    const url = file.replace(/^dist[\\/]/, "/").replace(/index\.html$/, "").replace(/\\/g, "/");
    const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [, ""])[1];
    return {
      url,
      noindex: /<meta name="robots" content="noindex"/.test(html),
      title: decode((html.match(/<title>([^<]*)<\/title>/) || [, ""])[1]),
      desc: decode((html.match(/<meta name="description" content="([^"]*)"/) || [, ""])[1]),
      h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]+>/g, "").trim()),
      imgsNoAlt: [...main.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt="[^"]+"/.test(m[0])).length,
      links: [...main.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)].map((m) => m[1]),
      types: [...new Set([...html.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]))],
    };
  });

const issues = [];
const seenT = new Map(), seenD = new Map();
for (const p of pages.filter((p) => !p.noindex)) {
  if (p.title.length < 30 || p.title.length > 65) issues.push([p.url, `titre ${p.title.length} car.`, p.title]);
  if (p.desc.length < 110 || p.desc.length > 160) issues.push([p.url, `description ${p.desc.length} car.`, p.desc]);
  if (p.h1.length !== 1) issues.push([p.url, `${p.h1.length} H1`, p.h1.join(" | ")]);
  if (p.imgsNoAlt) issues.push([p.url, `${p.imgsNoAlt} image(s) sans alt`, ""]);
  seenT.set(p.title, [...(seenT.get(p.title) || []), p.url]);
  seenD.set(p.desc, [...(seenD.get(p.desc) || []), p.url]);
}
for (const [t, u] of seenT) if (u.length > 1) issues.push([u.join(", "), "titre dupliqué", t]);
for (const [d, u] of seenD) if (u.length > 1) issues.push([u.join(", "), "description dupliquée", d]);

// Liens internes entrants (depuis le contenu principal, hors en-tête et pied de page)
const inbound = new Map(pages.map((p) => [p.url, 0]));
for (const p of pages) for (const l of new Set(p.links)) if (inbound.has(l) && l !== p.url) inbound.set(l, inbound.get(l) + 1);

console.log(`Pages analysées : ${pages.length} (${pages.filter((p) => p.noindex).length} en noindex)\n`);
console.log("== Problèmes");
for (const [u, k, v] of issues) console.log(`- ${k.padEnd(24)} ${u}${v ? "  →  " + v : ""}`);
console.log("\n== Liens internes entrants (contenu principal) — les plus faibles");
[...inbound].filter(([u]) => !pages.find((p) => p.url === u).noindex).sort((a, b) => a[1] - b[1]).slice(0, 12).forEach(([u, n]) => console.log(`${String(n).padStart(3)}  ${u}`));
console.log("\n== Données structurées par type de page");
for (const u of ["/", "/nettoyage-bureau/", "/nettoyage-bureaux-paris/", "/contact/"]) {
  const p = pages.find((x) => x.url === u);
  if (p) console.log(`${u.padEnd(28)} ${p.types.join(", ")}`);
}
