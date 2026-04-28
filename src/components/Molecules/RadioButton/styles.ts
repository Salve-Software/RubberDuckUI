import type { IRadioButtonProps } from './types';
import { useRubberDuckStore } from '../../../store';
import { StyleSheet } from 'react-native';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = (props: IRadioButtonProps) => {
  const { isChecked } = props;

  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: Tokens.spacer({ key: 'xs' }),
      alignItems: 'center',
    },

    leftCheckWrapper: {
      height: 30,
      width: 30,
      borderRadius: Tokens.radii({ key: 'full' }),
      backgroundColor: colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
    },

    leftCheck: {
      height: isChecked ? 15 : 25,
      width: isChecked ? 15 : 25,
      borderRadius: Tokens.radii({ key: 'full' }),
      backgroundColor: colors.background,
    },
  });
};
