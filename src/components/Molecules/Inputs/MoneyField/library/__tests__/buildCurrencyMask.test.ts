import { formatWithMask } from 'react-native-mask-input';
import { buildCurrencyMask } from '../buildCurrencyMask';

const applyMask = (text: string, props: Parameters<typeof buildCurrencyMask>[0]) => {
  const mask = buildCurrencyMask(props);
  return formatWithMask({ text, mask }).masked;
};

describe('MoneyField/buildCurrencyMask', () => {
  it('Formats USD values with "$ " prefix, comma groups and dot decimals', () => {
    const result = applyMask('123456', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
    });
    expect(result).toBe('$ 1,234.56');
  });

  it('Formats BRL values with "R$ " prefix, dot groups and comma decimals', () => {
    const result = applyMask('123456', {
      currencySymbol: 'R$',
      decimalSeparator: ',',
      groupSeparator: '.',
      precision: 2,
    });
    expect(result).toBe('R$ 1.234,56');
  });

  it('Shows digits without decimal separator when input length is below precision', () => {
    const result = applyMask('5', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
    });
    expect(result).toBe('$ 5');
  });

  it('Starts applying the decimal separator once input length exceeds precision', () => {
    const result = applyMask('525', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
    });
    expect(result).toBe('$ 5.25');
  });

  it('Supports zero-precision currencies (no decimal separator)', () => {
    const result = applyMask('1234', {
      currencySymbol: '¥',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 0,
    });
    expect(result).toBe('¥ 1,234');
  });

  it('Supports precision higher than two', () => {
    const result = applyMask('1234567', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 4,
    });
    expect(result).toBe('$ 123.4567');
  });

  it('Returns an empty string for empty input (prefix is not rendered until the user types)', () => {
    const result = applyMask('', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
    });
    expect(result).toBe('');
  });

  it('Strips non-digit characters from the input before formatting', () => {
    const result = applyMask('abc1,234.56xyz', {
      currencySymbol: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      precision: 2,
    });
    expect(result).toBe('$ 1,234.56');
  });
});
