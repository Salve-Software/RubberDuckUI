export interface IUseNumberFieldViewModelReturn {
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (value: string) => void;
}
