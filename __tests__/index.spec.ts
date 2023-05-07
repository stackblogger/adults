import { adultWords } from 'adults-list';
import { addWords, isBad } from '../src';
import { BadWordHelper } from '../src/plugin/util';

describe('Adults', () => {
  it('should detect as bad word', (done) => {
    const isItBad = isBad('Hey fuck man');
    expect(isItBad).toBe(true);
    done();
  });

  it('should not detect as bad word', (done) => {
    const itsNotBad = isBad('Hey StackBlogger!');
    expect(itsNotBad).toBe(false);
    done();
  });

  it('should detect a custom word', (done) => {
    addWords('StackBlogger');
    const itsBad = isBad('It should say stackblogger is a bad word');
    expect(itsBad).toBe(true);
    done();
  });

  it('should check the count of bad words', (done) => {
    const size = BadWordHelper.badWordList.size;
    expect(adultWords.length + 1).toBe(size); // did +1 because one custom word is added in above test case
    done();
  });
});
