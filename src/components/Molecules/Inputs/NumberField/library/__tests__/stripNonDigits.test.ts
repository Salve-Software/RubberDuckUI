import { stripNonDigits } from '../stripNonDigits';

describe('NumberField/stripNonDigits', () => {
  it('Returns the same string when all characters are digits', () => {
    const result = stripNonDigits('12345');
    expect(result).toBe('12345');
  });

  it('Removes letters', () => {
    const result = stripNonDigits('abc123');
    expect(result).toBe('123');
  });

  it('Removes spaces, dashes and parentheses', () => {
    const result = stripNonDigits('(11) 98765-4321');
    expect(result).toBe('11987654321');
  });

  it('Removes currency and punctuation characters', () => {
    const result = stripNonDigits('$ 1,234.56');
    expect(result).toBe('123456');
  });

  it('Returns an empty string when no digits are present', () => {
    const result = stripNonDigits('abcdef');
    expect(result).toBe('');
  });

  it('Returns an empty string for an empty input', () => {
    const result = stripNonDigits('');
    expect(result).toBe('');
  });

  it('Keeps leading zeros', () => {
    const result = stripNonDigits('007');
    expect(result).toBe('007');
  });

  it('Handles unicode digits outside [0-9] by removing them', () => {
    const result = stripNonDigits('①②③123');
    expect(result).toBe('123');
  });
});
