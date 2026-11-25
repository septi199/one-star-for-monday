import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday as if it were a restaurant: the diner ordered
// the weekend, got served a Monday instead, and the waiter is the diner.
function buildEntry(): string {
  const order = "One star. Ordered the weekend, got served a Monday instead:";
  const service = "cold coffee, dead Wi-Fi, and the waiter — me — crying into the bill.";
  return `${order} ${service}`;
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function verifyOutput(path: string, expected: string): void {
  const written = readFileSync(path);
  if (!Buffer.from(expected, "utf8").equals(written)) {
    throw new Error("entry.txt verification failed: written bytes do not match the review");
  }
}

const ENTRY = buildEntry();
const wordCount = countWords(ENTRY);

if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-180 character gate`);
}
if (wordCount > 25) {
  throw new Error(`entry has ${wordCount} words, over the 25-word brief limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
verifyOutput(outPath, ENTRY);

console.log(`wrote ${outPath} (${ENTRY.length} characters, ${wordCount} words)`);
