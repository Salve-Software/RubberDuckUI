import type { IUseReanimatedStylesProps } from './types';
import { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useReanimatedStyles = (props: IUseReanimatedStylesProps) => {
  const { isFocused, accentColor, borderDefaultColor } = props;

  const progress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isFocused ? 1 : 0, { duration: 200 });
  }, [isFocused, progress]);

  const inputWrapper = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      progress.value,
      [0, 1],
      [borderDefaultColor, accentColor],
    ),
  }), [borderDefaultColor, accentColor]);

  return {
    inputWrapper,
  };
};
