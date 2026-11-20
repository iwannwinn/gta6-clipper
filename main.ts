// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the video itself: VIDEO.json at the repository root names
// the YouTube Short, and this program copies that file to the output
// directory where the gate reads it. Nothing else this program writes
// is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

// Fail loudly on a malformed entry instead of copying a bad file
// through to the gate.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  ((parsed as { url: string }).url.length === 0)
) {
  console.error('VIDEO.json must be an object with a non-empty url string');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`Could not copy VIDEO.json to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
