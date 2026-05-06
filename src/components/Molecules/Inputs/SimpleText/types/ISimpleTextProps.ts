import type { IconName } from "../../../../Atoms/Icon/types";

export interface ISimpleTextProps {
  title?: string;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  rightIcon?: {
    icon: IconName;
    onPress: () => void;
  };
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
