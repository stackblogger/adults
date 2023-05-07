import os from 'node:os';

export function isItWindows(): boolean {
  return os.platform() === 'win32';
}
