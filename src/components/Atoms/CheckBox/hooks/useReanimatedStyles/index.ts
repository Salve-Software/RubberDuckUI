import type { IMountReanimatedStylesProps } from './types';
import { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useReanimatedStyles = (props: IMountReanimatedStylesProps) => {
  const { isChecked, accentColor, borderDefaultColor } = props;

  const progress = useSharedValue(isChecked ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isChecked ? 1 : 0, { duration: 200 });
  }, [isChecked, progress]);

  const outerCheckbox = useAnimatedStyle(() => ({
    borderColor: interpolateColor(progress.value, [0, 1], [borderDefaultColor, accentColor]),
  }), [borderDefaultColor, accentColor]);

  const innerCheckbox = useAnimatedStyle(() => ({
    opacity: progress.value,
  }), [borderDefaultColor, accentColor]);

  return {
    outerCheckbox,
    innerCheckbox,
  };
};
