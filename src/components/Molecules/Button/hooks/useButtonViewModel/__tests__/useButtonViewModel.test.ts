import { renderHook } from '@testing-library/react-native';
import { useButtonViewModel } from '../index';

const baseProps = {
  label: 'Press me',
  onPress: jest.fn(),
};

describe('useButtonViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('onPressButton', () => {
    it('Calls onPress when not disabled and not loading', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() => useButtonViewModel({ ...baseProps, onPress }));

      result.current.onPressButton();

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('Does not call onPress when disabled is true', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, onPress, disabled: true }),
      );

      result.current.onPressButton();

      expect(onPress).not.toHaveBeenCalled();
    });

    it('Does not call onPress when isLoading is true', () => {
      const onPress = jest.fn();
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, onPress, isLoading: true }),
      );

      result.current.onPressButton();

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('sizes', () => {
    it('Returns sm config for size sm', () => {
      const { result } = renderHook(() => useButtonViewModel({ ...baseProps, size: 'sm' }));

      expect(result.current.sizes.height).toBe(36);
      expect(result.current.sizes.fontSize).toBe('sm');
      expect(result.current.sizes.iconSize).toBe('small_16');
      expect(result.current.sizes.loadingSize).toBe('tiny_48');
    });

    it('Returns md config for size md', () => {
      const { result } = renderHook(() => useButtonViewModel({ ...baseProps, size: 'md' }));

      expect(result.current.sizes.height).toBe(44);
      expect(result.current.sizes.fontSize).toBe('md');
      expect(result.current.sizes.iconSize).toBe('tiny_20');
      expect(result.current.sizes.loadingSize).toBe('small_64');
    });

    it('Returns lg config for size lg', () => {
      const { result } = renderHook(() => useButtonViewModel({ ...baseProps, size: 'lg' }));

      expect(result.current.sizes.height).toBe(52);
      expect(result.current.sizes.fontSize).toBe('lg');
      expect(result.current.sizes.iconSize).toBe('tiny_20');
      expect(result.current.sizes.loadingSize).toBe('small_64');
    });

    it('Defaults to md when size is not provided', () => {
      const { result } = renderHook(() => useButtonViewModel(baseProps));

      expect(result.current.sizes.height).toBe(44);
      expect(result.current.sizes.fontSize).toBe('md');
    });
  });

  describe('variantColors', () => {
    it('Returns correct text and iconColor for primary variant', () => {
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, variant: 'primary' }),
      );

      expect(result.current.variantColors.text).toBe('black');
      expect(result.current.variantColors.iconColor).toBe('black');
    });

    it('Returns correct text and iconColor for secondary variant', () => {
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, variant: 'secondary' }),
      );

      expect(result.current.variantColors.text).toBe('textPrimary');
      expect(result.current.variantColors.iconColor).toBe('textPrimary');
    });

    it('Returns transparent background for outline variant', () => {
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, variant: 'outline' }),
      );

      expect(result.current.variantColors.background).toBe('transparent');
      expect(result.current.variantColors.text).toBe('textPrimary');
    });

    it('Returns transparent background and border for ghost variant', () => {
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, variant: 'ghost' }),
      );

      expect(result.current.variantColors.background).toBe('transparent');
      expect(result.current.variantColors.border).toBe('transparent');
    });

    it('Returns correct text for destructive variant', () => {
      const { result } = renderHook(() =>
        useButtonViewModel({ ...baseProps, variant: 'destructive' }),
      );

      expect(result.current.variantColors.text).toBe('textInverse');
      expect(result.current.variantColors.iconColor).toBe('textInverse');
    });

    it('Defaults to primary variant when variant is not provided', () => {
      const { result } = renderHook(() => useButtonViewModel(baseProps));

      expect(result.current.variantColors.text).toBe('black');
    });
  });
});
