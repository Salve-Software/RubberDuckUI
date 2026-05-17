import { StyleSheet } from 'react-native';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = () => {
  return StyleSheet.create({
    separator: {
      width: Tokens.spacer({ key: 'xs' }),
    },

    contentContainer: {
      paddingVertical: Tokens.spacer({ key: 'md' }),
      paddingHorizontal: Tokens.spacer({ key: 'md' }),
    },
  });
};
