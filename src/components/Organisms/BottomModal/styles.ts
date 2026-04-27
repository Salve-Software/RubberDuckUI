import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    handleIndicator: {
      backgroundColor: colors.borderStrong,
      width: 40,
      height: 4,
      borderRadius: Tokens.radii({ key: 'full' }),
    },
    background: {
      backgroundColor: colors.surface,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
      paddingVertical: Tokens.spacer({ key: 'sm' }),
    },
    clearButton: {
      paddingHorizontal: Tokens.spacer({ key: 'xs' }),
      paddingVertical: Tokens.spacer({ key: 'xxs' }),
    },
  });
};
