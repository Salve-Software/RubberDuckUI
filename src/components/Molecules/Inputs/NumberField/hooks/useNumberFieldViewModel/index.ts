import type { INumberFieldProps } from '../../types';
import type { IUseNumberFieldViewModelReturn } from './types';
import { useState } from 'react';
import { stripNonDigits } from '../../library';

export const useNumberFieldViewModel = (
  props: INumberFieldProps,
): IUseNumberFieldViewModelReturn => {
  const { onChangeValue } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  function onChangeText(value: string) {
    onChangeValue(stripNonDigits(value));
  }

  return {
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  };
};
