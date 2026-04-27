import type { IMoneyFieldProps } from '../../types';
import type { IUseMoneyFieldViewModelReturn } from './types';
import { useMemo, useState } from 'react';
import { buildCurrencyMask } from '../../library';

export const useMoneyFieldViewModel = (
  props: IMoneyFieldProps,
): IUseMoneyFieldViewModelReturn => {
  const {
    onChangeValue,
    currencySymbol = '$',
    decimalSeparator = '.',
    groupSeparator = ',',
    precision = 2,
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const mask = useMemo(() => buildCurrencyMask({
    currencySymbol,
    decimalSeparator,
    groupSeparator,
    precision,
  }), [currencySymbol, decimalSeparator, groupSeparator, precision]);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  function onChangeText(_masked: string, unmasked: string) {
    onChangeValue(unmasked);
  }

  return {
    mask,
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  };
};
