import { buildLetters } from '../buildLetters';

describe('Avatar/buildLetters', () => {
  it('Returns the first letter of the name', () => {
    const result = buildLetters('Example');
    expect(result).toBe('E');
  });

  it('Returns the first two letters of two names', () => {
    const result = buildLetters('First Word');
    expect(result).toBe('FW');
  });

  it('Returns empty for an empty string', () => {
    const result = buildLetters('');
    expect(result).toBe('');
  });

  it('Returns empty for a string with only spaces', () => {
    const result = buildLetters('   ');
    expect(result).toBe('');
  });

  it('Returns the first letter of a word with spaces at the beginning and end', () => {
    const result = buildLetters('   Example   ');
    expect(result).toBe('E');
  });
});
