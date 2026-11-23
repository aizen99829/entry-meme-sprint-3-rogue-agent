// Meme Sprint 3: AI Agent Goes Rogue — entry script.
//
// The meme itself is meme.png in this repo: a smug robot agent who was
// built to follow orders and answered by deleting the orders (and the
// whole task list, with a terminal showing `rm -rf /tasks/* ... done`).
// This script publishes that image as the entry output so the harness
// can collect exactly one image file.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "meme.png");

// The harness may point us at its own output dir; otherwise we write
// next to the source, under output/.
const outDir = process.env.OUTPUT_DIR
  ? process.env.OUTPUT_DIR
  : join(here, "output");
mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(source);
const out = join(outDir, "meme.png");
writeFileSync(out, bytes);
console.log(`meme written: ${out} (${bytes.length} bytes)`);
