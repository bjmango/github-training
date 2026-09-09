# github-training

A throwaway practice repository for learning GitHub's collaboration features.

It contains one tiny pure function, `slugify()`, and a test suite — just enough
real code for pull requests, reviews, and CI to have something to chew on.

## Usage

```js
import { slugify } from './src/index.js';

slugify('Git & GitHub: a primer!'); // => 'git-github-a-primer'
```

## Development

```bash
npm test
```
