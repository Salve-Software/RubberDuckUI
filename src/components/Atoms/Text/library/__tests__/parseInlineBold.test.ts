import { parseInlineBold } from '../parseInlineBold';

describe('Text/parseInlineBold', () => {
  it('Returns a single plain segment when there is no bold marker', () => {
    const result = parseInlineBold('Hello world');
    expect(result).toEqual([{ text: 'Hello world', bold: false, key: 0 }]);
  });

  it('Returns a bold segment when the entire string is wrapped', () => {
    const result = parseInlineBold('**Hello world**');
    expect(result).toEqual([
      { text: '', bold: false, key: 0 },
      { text: 'Hello world', bold: true, key: 1 },
      { text: '', bold: false, key: 2 },
    ]);
  });

  it('Splits plain and bold segments correctly', () => {
    const result = parseInlineBold('I agree to the **Terms & Privacy Policy**');
    expect(result).toEqual([
      { text: 'I agree to the ', bold: false, key: 0 },
      { text: 'Terms & Privacy Policy', bold: true, key: 1 },
      { text: '', bold: false, key: 2 },
    ]);
  });

  it('Handles multiple bold segments', () => {
    const result = parseInlineBold('**Hello** and **world**');
    expect(result).toEqual([
      { text: '', bold: false, key: 0 },
      { text: 'Hello', bold: true, key: 1 },
      { text: ' and ', bold: false, key: 2 },
      { text: 'world', bold: true, key: 3 },
      { text: '', bold: false, key: 4 },
    ]);
  });

  it('Returns plain segment when markers are incomplete', () => {
    const result = parseInlineBold('Hello **world');
    expect(result).toEqual([{ text: 'Hello **world', bold: false, key: 0 }]);
  });
});
