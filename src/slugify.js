/**
 * Convert an arbitrary string into a URL-safe slug.
 * Pure function: never mutates its input.
 */

// Unicode decomposition splits "é" into "e" + U+0301 (combining acute accent),
// letting us drop the marks and keep the base ASCII letter.
const COMBINING_MARKS = /[̀-ͯ]/g;
const NON_SLUG_CHARS = /[^a-z0-9]+/g;
const EDGE_SEPARATORS = /^-+|-+$/g;

export function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`slugify expects a string, received ${typeof input}`);
  }

  return input
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .trim()
    .toLowerCase()
    .replace(NON_SLUG_CHARS, '-')
    .replace(EDGE_SEPARATORS, '');
}
