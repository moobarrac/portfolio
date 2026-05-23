import { readdir, stat, unlink } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../src/images/", import.meta.url).pathname;
const MAX_WIDTH = 1600;
const QUALITY = 80;
const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const formatBytes = (b) => `${(b / 1024).toFixed(0)} KB`;

const compress = async (file) => {
  const { dir, name, ext } = parse(file);
  if (!SOURCE_EXTENSIONS.has(ext.toLowerCase())) return null;

  const output = join(dir, `${name}.webp`);
  const inputStat = await stat(file);

  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const outputStat = await stat(output);
  await unlink(file);

  return {
    name: `${name}${ext}`,
    before: inputStat.size,
    after: outputStat.size,
  };
};

const entries = await readdir(IMAGES_DIR);
const results = [];
for (const entry of entries) {
  const full = join(IMAGES_DIR, entry);
  const result = await compress(full);
  if (result) results.push(result);
}

if (results.length === 0) {
  console.log("No images to compress.");
} else {
  const totalBefore = results.reduce((s, r) => s + r.before, 0);
  const totalAfter = results.reduce((s, r) => s + r.after, 0);
  for (const r of results) {
    const pct = ((1 - r.after / r.before) * 100).toFixed(0);
    console.log(
      `${r.name.padEnd(28)} ${formatBytes(r.before).padStart(10)}  →  ${formatBytes(r.after).padStart(8)}  (-${pct}%)`,
    );
  }
  console.log(
    `\nTotal: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} ` +
      `(saved ${formatBytes(totalBefore - totalAfter)}, ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`,
  );
}
