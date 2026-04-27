import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../../../store';
import { Tokens } from '../../../../../tokens/Tokens.class';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    flatlistContent: {
      paddingVertical: Tokens.spacer({ key: 'xs' }),
    },
    itemWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Tokens.spacer({ key: 'xs' }),
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
      paddingVertical: Tokens.spacer({ key: 'xs' }),
      height: 56,
    },
    itemSeparator: {
      height: 1,
      backgroundColor: colors.borderSubtle,
      marginHorizontal: Tokens.spacer({ key: 'md' }),
    },
    emptyWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: Tokens.spacer({ key: 'lg' }),
    },
    textWrapper: {
      flex: 1,
    },
  });
};
