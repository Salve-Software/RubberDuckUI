import type { IMountReanimatedStylesProps } from './types';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const useReanimatedStyles = (props: IMountReanimatedStylesProps) => {
  const { isChecked } = props;

  const checkbox = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isChecked ? 1 : 0),
    };
  }, [isChecked]);

  return {
    checkbox,
  };
};
