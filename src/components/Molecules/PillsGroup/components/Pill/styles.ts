import { StyleSheet } from 'react-native';
import { Tokens } from '../../../../../tokens/Tokens.class';

export const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      borderRadius: Tokens.radii({ key: 'full' }),
      borderWidth: 1,
      padding: Tokens.spacer({ key: 'md' }),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
