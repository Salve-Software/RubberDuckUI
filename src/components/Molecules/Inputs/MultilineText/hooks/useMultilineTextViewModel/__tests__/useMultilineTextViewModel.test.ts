import { renderHook, act } from '@testing-library/react-native';
import { useMultilineTextViewModel } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('useMultilineTextViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isFocused', () => {
    it('Starts as false', () => {
      const { result } = renderHook(() =>
        useMultilineTextViewModel(baseProps),
      );
      expect(result.current.isFocused).toBe(false);
    });

    it('Becomes true when onFocus is called', () => {
      const { result } = renderHook(() =>
        useMultilineTextViewModel(baseProps),
      );

      act(() => result.current.onFocus());

      expect(result.current.isFocused).toBe(true);
    });

    it('Returns to false when onBlur is called after onFocus', () => {
      const { result } = renderHook(() =>
        useMultilineTextViewModel(baseProps),
      );

      act(() => result.current.onFocus());
      act(() => result.current.onBlur());

      expect(result.current.isFocused).toBe(false);
    });
  });

  describe('onChangeText', () => {
    it('Calls onChangeValue with the typed text', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useMultilineTextViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('hello'));

      expect(onChangeValue).toHaveBeenCalledTimes(1);
      expect(onChangeValue).toHaveBeenCalledWith('hello');
    });

    it('Passes an empty string when the field is cleared', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useMultilineTextViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText(''));

      expect(onChangeValue).toHaveBeenCalledWith('');
    });
  });
});
