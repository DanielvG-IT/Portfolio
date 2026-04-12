import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");
const publicDir = path.join(root, "public");
const staticDir = path.join(root, ".next", "static");
const standalonePublicDir = path.join(standaloneDir, "public");
const standaloneNextDir = path.join(standaloneDir, ".next");
const standaloneStaticDir = path.join(standaloneNextDir, "static");

if (!existsSync(standaloneDir)) {
  console.error(
    "Standalone build output was not found. Run `next build` before preparing the standalone server.",
  );
  process.exit(1);
}

if (existsSync(publicDir)) {
  cpSync(publicDir, standalonePublicDir, { recursive: true, force: true });
}

if (existsSync(staticDir)) {
  mkdirSync(standaloneNextDir, { recursive: true });
  cpSync(staticDir, standaloneStaticDir, { recursive: true, force: true });
}

console.log("Prepared .next/standalone with public and static assets.");
