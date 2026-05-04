import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TOAST_SLIDE_OFFSET } from '../../constants';

export const useReanimatedStyles = ({ isVisible }: { isVisible: boolean }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isVisible ? 1 : 0, { duration: 250 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const container = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [TOAST_SLIDE_OFFSET, 0]),
      },
    ],
  }), []);

  return {
    container,
  };
};
