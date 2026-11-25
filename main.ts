// Real-Life Patch Notes: The Comedy Changelog — make.fun entry for @yuhao-qiao.
// The program writes one patch-note line to /output/entry.txt: a terse
// release note for a bug in real life, in the register of a real changelog.
// The line is baked into the code below so the program runs with no network
// and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The patch note: knees creaking on cold mornings, filed like a real bug.
// "No warranty, no rollback, and the user refuses to restart" is the joke:
// every support ticket about the human body ends the same way — the user
// will not reboot, and there is no older version to roll back to. The
// version number and the "Root cause" phrasing sell it as a genuine
// changelog entry rather than a joke wearing a changelog costume.
const LINE = "v3.0.2: fixed a bug where knees creaked on cold mornings. Root cause: thirty years of wear; no warranty, no rollback, and the user refuses to restart.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: kept the knees, not the back — knees creak, backs seize,
// and a creak is funnier because it has a sound. The user refusing to
// restart is the closer; without it the note is just a complaint.
