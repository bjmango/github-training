/**
 * Convert an arbitrary string into a URL-safe slug.
 * Pure function: never mutates its input.
 */
export function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`slugify expects a string, received ${typeof input}`);
  }

  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
