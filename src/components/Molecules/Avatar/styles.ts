import type { IAvatarProps } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = (props: IAvatarProps, size: number) => {
  const { borderColor } = props;

  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    wrapper: {
      height: size,
      width: size,
    },

    avatar: {
      height: size,
      width: size,
      borderRadius: Tokens.radii({ key: 'full' }),
      borderWidth: borderColor ? 2 : 0,
      borderColor: borderColor ? colors[borderColor] : undefined,
    },

    lettersWrapper: {
      height: size,
      width: size,
      borderRadius: Tokens.radii({ key: 'full' }),
      borderWidth: borderColor ? 2 : 0,
      borderColor: borderColor ? colors[borderColor] : undefined,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.accent,
    },

    ghostSkeleton: {
      position: 'absolute',
    },
  });
};
