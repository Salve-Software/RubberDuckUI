import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../../../store';
import { Tokens } from '../../../../../tokens/Tokens.class';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    background: {
      borderTopRightRadius: Tokens.radii({ key: 'lg' }),
      borderTopLeftRadius: Tokens.radii({ key: 'lg' }),
      backgroundColor: colors.surface,
    },
  });
};
