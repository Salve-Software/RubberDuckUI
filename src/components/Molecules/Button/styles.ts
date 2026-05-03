import type { IButtonProps } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';
import { buildSize, buildVariantColors } from './library';

export const useStyles = (props: IButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    disabled,
    fullWidth,
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const sizes = buildSize(size);
  const variantColors = buildVariantColors(variant, colors);

  return {
    styles: StyleSheet.create({
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
        alignSelf: fullWidth ? 'stretch' : 'flex-start',
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Tokens.spacer({ key: 'xs' }),
      },
    }),
    sizes,
    variantColors,
  };
};
