import { useEffect } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  TOAST_DRAG_DISMISS_THRESHOLD,
  TOAST_SLINGSHOT_MAX_OFFSET,
  TOAST_SLIDE_OFFSET,
} from '../../constants';

export const useReanimatedStyles = (isVisible: boolean, onDismiss: () => void) => {
  const progress = useSharedValue(0);
  const dragY = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      progress.value = withSpring(1, { damping: 18, stiffness: 180 });
    } else {
      progress.value = withTiming(0, { duration: 200 });
      dragY.value = withTiming(0, { duration: 200 });
    }
  }, [isVisible, progress, dragY]);

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationY < 0) {
        dragY.value = Math.max(e.translationY, -TOAST_SLINGSHOT_MAX_OFFSET);
      } else {
        dragY.value = e.translationY;
      }
    })
    .onEnd((e) => {
      if (e.translationY > TOAST_DRAG_DISMISS_THRESHOLD) {
        dragY.value = withTiming(TOAST_SLIDE_OFFSET, { duration: 200 });
        runOnJS(onDismiss)();
      } else {
        dragY.value = withSpring(0);
      }
    });

  const wrapper = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [TOAST_SLIDE_OFFSET, 0]) + dragY.value,
      },
    ],
  }), []);

  return {
    wrapper,
    gesture,
  };
};
