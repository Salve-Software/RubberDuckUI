import type { IUseReanimatedStylesProps } from './types';
import { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useRubberDuckStore } from '../../../../../../../store';

export const useReanimatedStyles = (props: IUseReanimatedStylesProps) => {
  const { isSelected } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const progress = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0, { duration: 200 });
  }, [isSelected, progress]);

  const wrapper = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], [colors.surface, colors.accent]),
    borderColor: interpolateColor(progress.value, [0, 1], [colors.surfaceOverlay, colors.accentMuted]),
  }), [colors]);

  return { wrapper };
};
