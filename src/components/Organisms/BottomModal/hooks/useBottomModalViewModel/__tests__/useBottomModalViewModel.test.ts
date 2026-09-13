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

    it('Does NOT reach the sheet when nothing was opened', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      const sheet = { present: jest.fn(), dismiss: jest.fn() };
      result.current.bottomSheetRef.current = sheet as never;

      act(() => { BottomModalApi.dismiss(); });

      expect(sheet.dismiss).not.toHaveBeenCalled();
    });

    it('Reaches the sheet while it is open', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      const sheet = { present: jest.fn(), dismiss: jest.fn() };
      result.current.bottomSheetRef.current = sheet as never;

      act(() => { BottomModalApi.open({ content: null }); });
      act(() => { BottomModalApi.dismiss(); });

      expect(sheet.dismiss).toHaveBeenCalledTimes(1);
    });

    it('Does NOT reach the sheet again after it closed itself', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      const sheet = { present: jest.fn(), dismiss: jest.fn() };
      result.current.bottomSheetRef.current = sheet as never;

      act(() => { BottomModalApi.open({ content: null }); });
      act(() => { result.current.onDismiss(); });
      act(() => { BottomModalApi.dismiss(); });

      expect(sheet.dismiss).not.toHaveBeenCalled();
    });
  });

  describe('bottomSheetRef', () => {
    it('Returns a ref object', () => {
      const { result } = renderHook(() => useBottomModalViewModel());
      expect(result.current.bottomSheetRef).toHaveProperty('current');
    });
  });
});
