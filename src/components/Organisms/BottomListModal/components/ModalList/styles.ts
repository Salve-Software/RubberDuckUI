import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRubberDuckStore } from '../../../../../store';
import { Tokens } from '../../../../../tokens/Tokens.class';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    listContent: {
      paddingBottom: insets.bottom + Tokens.spacer({ key: 'xs' }),
    },
    
    header: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
      paddingVertical: Tokens.spacer({ key: 'sm' }),
      backgroundColor: colors.surface,
    },
    
    itemWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Tokens.spacer({ key: 'xs' }),
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
      paddingVertical: Tokens.spacer({ key: 'xs' }),
      height: 56,
    },

    selectableItemWrapper: {
      justifyContent: 'center',
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
      paddingVertical: Tokens.spacer({ key: 'xs' }),
      height: 56,
    },
    
    itemSeparator: {
      height: 1,
      backgroundColor: colors.borderSubtle,
      marginHorizontal: Tokens.spacer({ key: 'md' }),
    },
    
    textWrapper: {
      flex: 1,
    },
  });
};
