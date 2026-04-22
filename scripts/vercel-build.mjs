import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sourceDir = path.join(repoRoot, "site sport africain");
const outputDir = path.join(repoRoot, "dist");

const excludedNames = new Set([
  ".vscode",
  "_backup_20260419_224126",
  "backend",
  "netlify.toml"
]);

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
  if (excludedNames.has(entry.name)) {
    continue;
  }

  if (entry.name.endsWith(".md")) {
    continue;
  }

  const sourcePath = path.join(sourceDir, entry.name);
  const outputPath = path.join(outputDir, entry.name);

  fs.cpSync(sourcePath, outputPath, { recursive: true, force: true });
}

console.log(`Static site copied from ${sourceDir} to ${outputDir}`);
