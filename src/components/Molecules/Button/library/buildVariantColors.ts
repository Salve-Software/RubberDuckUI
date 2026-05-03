import type { IColors } from '../../../../tokens/colors';
import type { ButtonVariant } from '../types';

export type ButtonVariantColors = {
  background: string;
  border: string;
  text: keyof IColors;
  iconColor: keyof IColors;
};

export const buildVariantColors = (variant: ButtonVariant, colors: IColors): ButtonVariantColors => {
  switch (variant) {
    case 'primary':
      return { background: colors.accent, border: colors.accent, text: 'black', iconColor: 'black' };
    case 'secondary':
      return { background: colors.surface, border: colors.borderDefault, text: 'textPrimary', iconColor: 'textPrimary' };
    case 'outline':
      return { background: 'transparent', border: colors.borderDefault, text: 'textPrimary', iconColor: 'textPrimary' };
    case 'ghost':
      return { background: 'transparent', border: 'transparent', text: 'textPrimary', iconColor: 'textPrimary' };
    case 'destructive':
      return { background: colors.error, border: colors.error, text: 'textInverse', iconColor: 'textInverse' };
  }
};
