import { renderHook, act } from '@testing-library/react-native';
import { useBottomModalViewModel } from '../index';
import { BottomModalApi } from '../../../controllers';

jest.spyOn(BottomModalApi, 'setRef');

describe('useBottomModalViewModel', () => {
  beforeEach(() => {
    BottomModalApi.setRef({ current: null });
    jest.clearAllMocks();
  });

  describe('Initial state', () => {
    it('bottomModalProps starts as undefined', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      expect(result.current.bottomModalProps).toBeUndefined();
    });

    it('Registers with BottomModalApi on mount', () => {
      renderHook(() => useBottomModalViewModel());
      expect(BottomModalApi.setRef).toHaveBeenCalledTimes(1);
    });
  });

  describe('open', () => {
    it('Updates bottomModalProps with the provided content', () => {
      const { result } = renderHook(() => useBottomModalViewModel());

      act(() => {
        result.current.bottomSheetRef;
        BottomModalApi.open({ content: null });
      });

      expect(result.current.bottomModalProps).toEqual({ content: null });
    });

    it('Replaces bottomModalProps when called a second time', () => {
      const { result } = renderHook(() => useBottomModalViewModel());

      act(() => { BottomModalApi.open({ content: null }); });
      act(() => { BottomModalApi.open({ content: undefined as any }); });

      expect(result.current.bottomModalProps?.content).toBeUndefined();
    });
  });

  describe('dismiss', () => {
    it('Does not throw when bottomSheetRef.current is null', () => {
      renderHook(() => useBottomModalViewModel());

      expect(() => {
        act(() => { BottomModalApi.dismiss(); });
      }).not.toThrow();
    });
  });

  describe('bottomSheetRef', () => {
    it('Returns a ref object', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      expect(result.current.bottomSheetRef).toHaveProperty('current');
    });
  });
});
