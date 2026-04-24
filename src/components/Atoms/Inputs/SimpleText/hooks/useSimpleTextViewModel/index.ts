import type { ISimpleTextProps } from '../../types';
import type { IUseSimpleTextViewModelReturn } from './types';
import { useState } from 'react';

export const useSimpleTextViewModel = (
  props: ISimpleTextProps,
): IUseSimpleTextViewModelReturn => {
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
