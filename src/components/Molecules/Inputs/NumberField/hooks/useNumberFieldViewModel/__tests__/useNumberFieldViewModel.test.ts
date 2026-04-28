import { renderHook, act } from '@testing-library/react-native';
import { useNumberFieldViewModel } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('useNumberFieldViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isFocused', () => {
    it('Starts as false', () => {
      const { result } = renderHook(() =>
        useNumberFieldViewModel(baseProps),
      );
      expect(result.current.isFocused).toBe(false);
    });

    it('Becomes true when onFocus is called', () => {
      const { result } = renderHook(() =>
        useNumberFieldViewModel(baseProps),
      );

      act(() => result.current.onFocus());

      expect(result.current.isFocused).toBe(true);
    });

    it('Returns to false when onBlur is called after onFocus', () => {
      const { result } = renderHook(() =>
        useNumberFieldViewModel(baseProps),
      );

      act(() => result.current.onFocus());
      act(() => result.current.onBlur());

      expect(result.current.isFocused).toBe(false);
    });
  });

  describe('onChangeText', () => {
    it('Strips non-digit characters before calling onChangeValue', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useNumberFieldViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('12abc34'));

      expect(onChangeValue).toHaveBeenCalledWith('1234');
    });

    it('Passes pure digit strings unchanged', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useNumberFieldViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('9876'));

      expect(onChangeValue).toHaveBeenCalledWith('9876');
    });

    it('Passes an empty string when the field is cleared', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useNumberFieldViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText(''));

      expect(onChangeValue).toHaveBeenCalledWith('');
    });
  });
});
