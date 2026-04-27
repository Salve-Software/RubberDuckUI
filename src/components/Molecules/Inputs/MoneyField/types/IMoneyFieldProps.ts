export interface IMoneyFieldProps {
  title?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  currencySymbol?: string;
  decimalSeparator?: string;
  groupSeparator?: string;
  precision?: number;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}
