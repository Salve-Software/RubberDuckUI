export interface ISimpleTextProps {
  title?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}
