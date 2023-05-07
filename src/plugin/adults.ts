import { BadWordHelper } from './util';

export function addWords(...words: string[]): void {
  BadWordHelper.addBadWords(words.map((word) => word.toLowerCase()));
}

export function isBad(...sentences: string[]): boolean {
  return (
    Array.from(BadWordHelper.badWordList).filter((word) => {
      const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
      return wordExp.test(sentences.join(' '));
    }).length > 0 || false
  );
}
