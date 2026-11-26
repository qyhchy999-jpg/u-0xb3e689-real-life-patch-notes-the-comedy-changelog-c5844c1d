// Real-Life Patch Notes: The Comedy Changelog — make.fun entry for @yuhao-qiao.
// The program writes one patch-note line to /output/entry.txt: a terse
// release note for a bug in real life, in the register of a real changelog.
// The line is baked into the code below so the program runs with no network
// and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The patch note: the brain replays embarrassing moments from 2009 at
// 3 a.m., filed like a real bug. "No delete key for memories" is the
// mechanism, and "Status: won't fix" is authentic changelog language:
// the human body ships without a memory delete key, and the support
// team closes the ticket as won't-fix because the bug is unfixable
// by design. The version number and "Root cause" phrasing sell it as
// a genuine changelog entry rather than a joke wearing a changelog
// costume.
const LINE = "v4.2.0: fixed a bug where the brain replays embarrassing moments from 2009 at 3 a.m. Root cause: no delete key for memories. Status: won't fix.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: kept the 3 a.m. replay, not the knees — the replay is
// universal, and "won't fix" is the closer; without it the note is
// just a complaint filed against the wrong department. The year 2009
// matters: it has to be long enough ago to be embarrassing, recent
// enough to still sting at 3 a.m.
