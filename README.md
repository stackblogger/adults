[![npm-version]][npm] [![coveralls-status]][coveralls] ![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/stackblogger/adults/master.yml?style=flat-square&logo=github&color=success)
![npm](https://img.shields.io/npm/v/adults?style=flat-square&color=success&logo=npm)

# adults

A simple JavaScript / TypeScript library to detect bad words. Use it with your custom list of bad words.

## Installation

```bash
npm install adults
```

## Usage

```typescript
// TypeScript Usage
import { addWords, isBad } from 'adults';

// JavaScript Usage
const { addWords, isBad} = require('adults');

addWords('some', 'custom', 'word'); // add your list of custom words here

const isBadWord = isBad('This is a sample xxx content', 'Some more custom word content here');

console.log(isBadWord);

// OUTPUT true

const isItBad = isBad('Hey StackBlogger!');

console.log(isItBad);

// OUTPUT false
```

### License

[MIT](https://choosealicense.com/licenses/mit/)
