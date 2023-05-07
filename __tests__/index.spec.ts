import { packageJson } from '../src/plugin/package-json-finder';

describe('ParentPackageJsonTS-Test', () => {
  it('should return valid JSON object when package.json is found', (done) => {
    const contents = packageJson();
    expect(contents).toHaveProperty('name');
    expect(contents).toHaveProperty('version');
    expect(contents).toHaveProperty('description');
    expect(contents).toHaveProperty('files');
    expect(contents).toHaveProperty('scripts');
    expect(contents).toHaveProperty('repository');
    expect(contents).toHaveProperty('license');
    expect(contents?.name).toEqual('adults');
    expect(contents?.author).toMatchObject({
      name: 'StackBlogger (Jameer Khan)',
      email: 'jimcute8879@gmail.com',
      url: 'https://stackblogger.com'
    });
    expect(contents?.repository).toMatchObject({
      type: 'git',
      url: 'git+https://github.com/stackblogger/adults.git'
    });
    done();
  });

  it('should return undefined when package.json not found', (done) => {
    const contents = packageJson('../');
    expect(contents).toBeUndefined();
    done();
  });
});
