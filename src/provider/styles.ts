import type { IRubberDuckUIProviderProps } from './types';
import { StyleSheet } from 'react-native';

export const useStyles = (props: IRubberDuckUIProviderProps) => {
  const { } = props;

  return StyleSheet.create({
    wrapper: {
      flex: 1,
    },
  });
};
