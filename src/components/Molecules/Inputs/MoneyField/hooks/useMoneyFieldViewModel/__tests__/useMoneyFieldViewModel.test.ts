import { renderHook, act } from '@testing-library/react-native';
import { useMoneyFieldViewModel } from '../index';

jest.mock('react-native-mask-input', () => ({
  createNumberMask: ({ prefix }: { prefix?: string[] } = {}) => [...(prefix ?? [])],
}));

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('useMoneyFieldViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isFocused', () => {
    it('Starts as false', () => {
      const { result } = renderHook(() =>
        useMoneyFieldViewModel(baseProps),
      );
      expect(result.current.isFocused).toBe(false);
    });

    it('Becomes true when onFocus is called', () => {
      const { result } = renderHook(() =>
        useMoneyFieldViewModel(baseProps),
      );

      act(() => result.current.onFocus());

      expect(result.current.isFocused).toBe(true);
    });

    it('Returns to false when onBlur is called after onFocus', () => {
      const { result } = renderHook(() =>
        useMoneyFieldViewModel(baseProps),
      );

      act(() => result.current.onFocus());
      act(() => result.current.onBlur());

      expect(result.current.isFocused).toBe(false);
    });
  });

  describe('onChangeText', () => {
    it('Passes the unmasked value to onChangeValue', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useMoneyFieldViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('$1,234.56', '123456'));

      expect(onChangeValue).toHaveBeenCalledWith('123456');
    });

    it('Ignores the masked string and only uses the unmasked value', () => {
      const onChangeValue = jest.fn();
      const { result } = renderHook(() =>
        useMoneyFieldViewModel({ ...baseProps, onChangeValue }),
      );

      act(() => result.current.onChangeText('irrelevant-masked', '9900'));

      expect(onChangeValue).toHaveBeenCalledWith('9900');
    });
  });

  describe('mask', () => {
    it('Returns a mask array', () => {
      const { result } = renderHook(() =>
        useMoneyFieldViewModel(baseProps),
      );
      expect(Array.isArray(result.current.mask)).toBe(true);
    });

    it('Returns a new mask when currency symbol changes', () => {
      const { result: resultDollar } = renderHook(() =>
        useMoneyFieldViewModel({ ...baseProps, currencySymbol: '$' }),
      );
      const { result: resultEuro } = renderHook(() =>
        useMoneyFieldViewModel({ ...baseProps, currencySymbol: '€' }),
      );

      expect(resultDollar.current.mask).not.toEqual(resultEuro.current.mask);
    });
  });
});
