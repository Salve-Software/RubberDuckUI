import { createNumberMask } from 'react-native-mask-input';

export interface IBuildCurrencyMaskProps {
  currencySymbol: string;
  decimalSeparator: string;
  groupSeparator: string;
  precision: number;
}

export const buildCurrencyMask = (props: IBuildCurrencyMaskProps) => {
  const {
    currencySymbol,
    decimalSeparator,
    groupSeparator,
    precision,
  } = props;

  return createNumberMask({
    prefix: [...currencySymbol, ' '],
    delimiter: groupSeparator,
    separator: decimalSeparator,
    precision,
  });
};
