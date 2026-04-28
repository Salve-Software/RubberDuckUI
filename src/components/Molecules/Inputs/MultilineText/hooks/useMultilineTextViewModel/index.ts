import type { IMultilineTextProps } from '../../types';
import type { IUseMultilineTextViewModelReturn } from './types';
import { useState } from 'react';

export const useMultilineTextViewModel = (
  props: IMultilineTextProps,
): IUseMultilineTextViewModelReturn => {
  const { onChangeValue } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  function onChangeText(value: string) {
    onChangeValue(value);
  }

  return {
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  };
};
