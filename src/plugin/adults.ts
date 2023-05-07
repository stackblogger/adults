import { BadWordHelper } from './util';

export function addWords(...words: string[]): void {
  BadWordHelper.badWords(words.map((word) => word.toLowerCase()));
}

export function isBad(...sentences: string[]): boolean {
  return !!sentences.find((sentence) => sentence.split(' ').find((word) => BadWordHelper.isItBad(word.toLowerCase())));
}
