export interface INumberFieldProps {
  title?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  rightLabel?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}
