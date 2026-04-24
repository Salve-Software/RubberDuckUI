export interface IUseSimpleTextViewModelReturn {
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (value: string) => void;
}
