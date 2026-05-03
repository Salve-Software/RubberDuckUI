import type { IconName } from '../../../Atoms/Icon/types';
import type { ButtonVariant } from './ButtonVariant';
import type { ButtonSize } from './ButtonSize';

export interface IButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  testID?: string;
}
