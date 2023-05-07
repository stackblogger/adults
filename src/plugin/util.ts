import { adultWords } from 'adults-list';

export class BadWordHelper {
  private static _badWords: Set<string> = new Set<string>(adultWords);

  public static get badWordList(): Set<string> {
    return this._badWords;
  }

  public static addBadWords(words: string[]): void {
    words.map((word) => this._badWords.add(word));
  }

  public static isItBad(word: string): boolean {
    return this._badWords.has(word);
  }
}
