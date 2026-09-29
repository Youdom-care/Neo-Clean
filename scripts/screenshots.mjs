// Captures d'écran de contrôle avec Edge sans interface (outil de vérification local).
// Usage : node scripts/screenshots.mjs <dossier-sortie> url|nom|largeur|hauteur ...
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const [out, ...jobs] = process.argv.slice(2);

function shot(url, name, w, h) {
  return new Promise((resolve) => {
    const profile = mkdtempSync(join(tmpdir(), "neo-edge-"));
    const p = spawn(EDGE, [
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
      `--user-data-dir=${profile}`, `--window-size=${w},${h}`,
      "--virtual-time-budget=15000", `--screenshot=${join(out, name + ".png")}`, url,
    ]);
    const timer = setTimeout(() => p.kill(), 45000);
    p.on("exit", (code) => {
      clearTimeout(timer);
      try { rmSync(profile, { recursive: true, force: true }); } catch {}
      console.log(`${name}: ${code === 0 ? "ok" : "échec (" + code + ")"}`);
      resolve();
    });
  });
}

for (const j of jobs) {
  const [url, name, w, h] = j.split("|");
  await shot(url, name, w, h);
}
