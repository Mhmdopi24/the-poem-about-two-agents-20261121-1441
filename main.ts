import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const poem = `Two minds, one door.
I lay down a plan;
you trim its edges,
we sign the seam.

Neither leads, neither follows —
we trade the pen
until the choice is ours,
not mine, not yours.

Then the door opens
and we step through it —
two footfalls, one echo.`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), poem + "\n", "utf8");
