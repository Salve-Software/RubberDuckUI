import type { IButtonProps } from './types';
import type { ButtonSizeConfig, ButtonVariantColors } from './library';
import { StyleSheet } from 'react-native';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = (
  props: IButtonProps,
  sizes: ButtonSizeConfig,
  variantColors: ButtonVariantColors,
) => {
  const { variant = 'primary', disabled } = props;

  return StyleSheet.create({
    button: {
      height: sizes.height,
      paddingHorizontal: sizes.paddingHorizontal,
      borderRadius: Tokens.radii({ key: 'md' }),
      backgroundColor: variantColors.background,
      borderWidth: variant === 'outline' ? 1 : 0,
      borderColor: variantColors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
      alignSelf: 'flex-start',
    },
    
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Tokens.spacer({ key: 'xs' }),
    },
  });
};
