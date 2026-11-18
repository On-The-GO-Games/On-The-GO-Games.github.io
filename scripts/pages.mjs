// Prepares dist/ for GitHub Pages, which ignores Netlify's _redirects and _headers.
// Every build alias that _redirects maps to a page becomes its own folder with an index.html,
// so the nav links keep working. The root URL gets home.html as index.html.
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const rules = (await readFile(path.join(dist, "_redirects"), "utf8")).split("\n");

let aliases = 0;
for (const rule of rules) {
  const [from, to, status] = rule.trim().split(/\s+/);
  // Skip proxy rules (they need a server) and anything that is not a plain 200 page alias.
  if (!from || !to || status !== "200" || from.includes("*") || !to.endsWith(".html")) continue;
  const folder = path.join(dist, from);
  await rm(folder, { recursive: true, force: true });
  await mkdir(folder, { recursive: true });
  await copyFile(path.join(dist, to), path.join(folder, "index.html"));
  aliases++;
}

await copyFile(path.join(dist, "home.html"), path.join(dist, "index.html"));
await writeFile(path.join(dist, ".nojekyll"), "");
await rm(path.join(dist, "_redirects"), { force: true });
await rm(path.join(dist, "_headers"), { force: true });

console.log(`pages: ${aliases} alias folders, index.html from home.html`);
