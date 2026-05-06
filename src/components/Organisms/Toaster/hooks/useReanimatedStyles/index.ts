import { useEffect } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
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
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(TOAST_SLIDE_OFFSET);
  const dragY = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      dragY.value = 0;
      opacity.value = withTiming(1, { duration: 200 });
      translateY.value = withSpring(0, { damping: 18, stiffness: 180 });
    } else {
      opacity.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(TOAST_SLIDE_OFFSET, { duration: 200 });
    }
  }, [isVisible, opacity, translateY, dragY]);

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
        runOnJS(onDismiss)();
      } else {
        dragY.value = withSpring(0);
      }
    });

  const wrapper = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value + dragY.value }],
  }), []);

  return {
    wrapper,
    gesture,
  };
};
