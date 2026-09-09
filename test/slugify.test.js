import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('lowercases and hyphenates a simple phrase', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('strips punctuation', () => {
  assert.equal(slugify('Git & GitHub: a primer!'), 'git-github-a-primer');
});

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  --wrapped--  '), 'wrapped');
});

test('rejects non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
});

test('transliterates accented characters instead of stripping them', () => {
  assert.equal(slugify('Café Münster'), 'cafe-munster');
});
