import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../../../store';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    background: {
      backgroundColor: colors.surface,
    },
  });
};
