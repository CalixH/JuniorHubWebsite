// Shrinks photos in public/images in place (max 1800px on the long edge, JPEG q80).
// Run after adding new photos:  npm run optimize-images
// Only overwrites a file when the result is smaller, so it is safe to re-run.
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const MAX = 1800;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let saved = 0;
let changed = 0;
for await (const file of walk(ROOT)) {
  if (!/\.(jpe?g)$/i.test(file)) continue;
  const before = (await stat(file)).size;
  const tmp = `${file}.tmp`;
  await sharp(file)
    .rotate() // apply EXIF orientation
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await rename(tmp, file);
    saved += before - after;
    changed++;
  } else {
    await unlink(tmp);
  }
}
console.log(`Optimized ${changed} images, saved ${(saved / 1048576).toFixed(1)} MB`);
