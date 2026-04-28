import { renderHook } from '@testing-library/react-native';
import { useCheckBoxViewModel } from '../index';

describe('useCheckBoxViewModel', () => {
  describe('onCheck', () => {
    it('Calls onPress when invoked', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() => useCheckBoxViewModel({ onPress }));

      result.current.onCheck();

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('Calls onPress every time onCheck is invoked', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() => useCheckBoxViewModel({ onPress }));

      result.current.onCheck();
      result.current.onCheck();

      expect(onPress).toHaveBeenCalledTimes(2);
    });
  });
});
