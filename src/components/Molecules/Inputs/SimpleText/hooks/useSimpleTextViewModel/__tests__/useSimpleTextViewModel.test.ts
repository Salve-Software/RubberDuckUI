import { renderHook, act } from '@testing-library/react-native';
import { useSimpleTextViewModel } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('useSimpleTextViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isFocused', () => {
    it('Starts as false', () => {
      const { result } = renderHook(() => useSimpleTextViewModel(baseProps));
      expect(result.current.isFocused).toBe(false);
    });

    it('Becomes true when onFocus is called', () => {
      const { result } = renderHook(() => useSimpleTextViewModel(baseProps));

      act(() => result.current.onFocus());

      expect(result.current.isFocused).toBe(true);
    });

    it('Returns to false when onBlur is called after onFocus', () => {
      const { result } = renderHook(() => useSimpleTextViewModel(baseProps));

      act(() => result.current.onFocus());
      act(() => result.current.onBlur());

      expect(result.current.isFocused).toBe(false);
    });
  });

  describe('onChangeText', () => {
    it('Calls onChangeValue with the typed text', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useSimpleTextViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('hello'));

      expect(onChangeValue).toHaveBeenCalledTimes(1);
      expect(onChangeValue).toHaveBeenCalledWith('hello');
    });

    it('Passes the text as-is without any transformation', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useSimpleTextViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('Hello World 123!'));

      expect(onChangeValue).toHaveBeenCalledWith('Hello World 123!');
    });

    it('Passes an empty string when the field is cleared', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useSimpleTextViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText(''));

      expect(onChangeValue).toHaveBeenCalledWith('');
    });
  });
});
