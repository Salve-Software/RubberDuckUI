export interface IMultilineTextProps {
  title?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  numberOfLines?: number;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}
