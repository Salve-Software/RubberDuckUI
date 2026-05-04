import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useReanimatedStyles = ({ isVisible }: { isVisible: boolean }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isVisible ? 1 : 0, { duration: 250 });
  }, [isVisible, progress]);

  const container = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [40, 0]),
      },
    ],
  }), []);

  return {
    container,
  };
};
