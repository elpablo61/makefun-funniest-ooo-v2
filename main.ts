import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Funniest Out of Office — copies the single winning auto-reply line
// to the grader output dir. Gate: entry.txt must be UTF-8 text, 1-140 chars.
// Deadpan auto-reply: a return date, one concrete number (214 unread emails),
// and one logical escalation — the wedding is his own.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const entry = readFileSync(join(here, "entry.txt"), "utf8");
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry.txt must be 1-140 characters, got ${entry.length}`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
