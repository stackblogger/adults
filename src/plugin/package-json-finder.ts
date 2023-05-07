import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { PackageJsonContent } from './types';
import { isItWindows } from './util';

/**
 * Get the parent package.json file contents as JSON object.
 *
 * @param initialPath Optional Initial Path of Package.Json file
 * @returns Parsed JSON object of Package.Json contents
 */
export function packageJson(initialPath = process.cwd()): PackageJsonContent | undefined {
  let searchPath = initialPath;
  let fileFound = false;
  let nextPath = '';
  let runCounter = 0;

  while (!fileFound) {
    searchPath = nextPath || searchPath;

    runCounter += 1;

    if (runCounter > 4) {
      break;
    }

    try {
      fs.statSync(path.join(`${searchPath}/package.json`));
      fileFound = true;
    } catch {
      /* empty */
    }

    nextPath = path.join(`${searchPath}/..`);

    const root = isItWindows() ? nextPath.split(path.sep)[0] + path.sep : path.normalize('/');

    if (nextPath === root || nextPath === '.' || nextPath === '..') {
      break;
    }
  }

  if (!fileFound) return undefined;

  return JSON.parse(fs.readFileSync(path.join(`${searchPath}/package.json`), 'utf8'));
}
