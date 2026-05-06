import { renderHook } from '@testing-library/react-native';
import { useSwitchViewModel } from '../index';

describe('useSwitchViewModel', () => {
  describe('onToggle', () => {
    it('Calls onPress when not disabled', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() => useSwitchViewModel({ onPress }));

      result.current.onToggle();

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('Does NOT call onPress when disabled', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() =>
        useSwitchViewModel({ onPress, disabled: true }),
      );

      result.current.onToggle();

      expect(onPress).not.toHaveBeenCalled();
    });
  });
});
