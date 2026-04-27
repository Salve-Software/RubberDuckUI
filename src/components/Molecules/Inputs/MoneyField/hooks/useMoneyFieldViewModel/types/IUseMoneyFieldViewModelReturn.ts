import type { Mask } from 'react-native-mask-input';

export interface IUseMoneyFieldViewModelReturn {
  mask: Mask;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (masked: string, unmasked: string) => void;
}
