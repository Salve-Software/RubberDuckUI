import type { IMountReanimatedStylesProps } from './types';
import { useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TRACK_WIDTH, THUMB_SIZE, TRACK_PADDING } from '../../styles';

export const useReanimatedStyles = (props: IMountReanimatedStylesProps) => {
  const { isOn, accentColor, borderDefaultColor } = props;

  const progress = useSharedValue(isOn ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isOn ? 1 : 0, { duration: 200 });
  }, [isOn, progress]);

  const track = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], [borderDefaultColor, accentColor]),
  }), [borderDefaultColor, accentColor]);

  const thumb = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * (TRACK_WIDTH - THUMB_SIZE - 2 * TRACK_PADDING) }],
  }), []);

  return {
    track,
    thumb,
  };
};
