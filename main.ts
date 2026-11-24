import { mkdirSync, writeFileSync } from "node:fs";

// Last text at one percent — v3 (final).
// Tightened: "snoozed it myself" -> "snoozed it".
const entry =
  "Confession before I die: your alarm was never broken. I snoozed it every morning because you looked so peaceful, and now we're both late forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
