// Met entre guillemets les valeurs YAML du front matter qui contiennent « : »
// (sinon YAML les prend pour des clés). Usage : node scripts/fix-frontmatter.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dirs = ["src/content/services", "src/content/zones"];
const quote = (v) => `"${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
const needs = (v) => !/^["'\[{]/.test(v) && /: |:$| #/.test(v);

let changed = 0;
for (const dir of dirs) {
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".md"))) {
    const path = join(dir, f);
    const src = readFileSync(path, "utf8");
    const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) continue;
    const fixed = m[1]
      .split(/\r?\n/)
      .map((line) => {
        // « clé: valeur » (éventuellement précédé de « - »)
        let r = line.match(/^(\s*(?:- )?[A-Za-z][\w]*: )(.+)$/);
        if (r && needs(r[2])) return r[1] + quote(r[2]);
        // élément de liste simple « - valeur »
        r = line.match(/^(\s*- )(.+)$/);
        if (r && !/^[A-Za-z]\w*: /.test(r[2]) && needs(r[2])) return r[1] + quote(r[2]);
        return line;
      })
      .join("\n");
    if (fixed !== m[1]) {
      writeFileSync(path, src.replace(m[1], () => fixed));
      changed++;
      console.log("corrigé :", path);
    }
  }
}
console.log(`${changed} fichier(s) modifié(s)`);
