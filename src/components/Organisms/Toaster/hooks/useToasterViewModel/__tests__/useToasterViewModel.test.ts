import { renderHook, act } from '@testing-library/react-native';
import { useToasterViewModel } from '../index';
import { ToasterApi } from '../../../controllers';

jest.spyOn(ToasterApi, 'setRef');

describe('useToasterViewModel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    ToasterApi.setRef({ current: null });
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Initial state', () => {
    it('toasterProps starts as undefined', () => {
      const { result } = renderHook(() => useToasterViewModel());
      expect(result.current.toasterProps).toBeUndefined();
    });

    it('isVisible starts as false', () => {
      const { result } = renderHook(() => useToasterViewModel());
      expect(result.current.isVisible).toBe(false);
    });

    it('Registers with ToasterApi on mount', () => {
      renderHook(() => useToasterViewModel());
      expect(ToasterApi.setRef).toHaveBeenCalledTimes(1);
    });
  });

  describe('show', () => {
    it('Sets toasterProps and isVisible to true', () => {
      const { result } = renderHook(() => useToasterViewModel());

      act(() => {
        ToasterApi.show({ type: 'success', title: 'Hello' });
      });

      expect(result.current.toasterProps).toEqual({ type: 'success', title: 'Hello' });
      expect(result.current.isVisible).toBe(true);
    });

    it('Auto-dismisses after default 3000ms', () => {
      const { result } = renderHook(() => useToasterViewModel());

      act(() => {
        ToasterApi.show({ type: 'info', title: 'Auto-dismiss' });
      });

      expect(result.current.isVisible).toBe(true);

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      expect(result.current.isVisible).toBe(false);
    });

    it('Honors custom duration', () => {
      const { result } = renderHook(() => useToasterViewModel());

      act(() => {
        ToasterApi.show({ type: 'warning', title: 'Custom', duration: 1000 });
      });

      act(() => {
        jest.advanceTimersByTime(999);
      });

      expect(result.current.isVisible).toBe(true);

      act(() => {
        jest.advanceTimersByTime(1);
      });

      expect(result.current.isVisible).toBe(false);
    });

    it('Calling show twice resets the timer', () => {
      const { result } = renderHook(() => useToasterViewModel());

      act(() => {
        ToasterApi.show({ type: 'success', title: 'First' });
      });

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      act(() => {
        ToasterApi.show({ type: 'error', title: 'Second' });
      });

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      expect(result.current.isVisible).toBe(true);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.isVisible).toBe(false);
    });
  });

  describe('hide', () => {
    it('Sets isVisible to false and clears timer', () => {
      const { result } = renderHook(() => useToasterViewModel());

      act(() => {
        ToasterApi.show({ type: 'success', title: 'Hello' });
      });

      act(() => {
        ToasterApi.hide();
      });

      expect(result.current.isVisible).toBe(false);
    });
  });
});
