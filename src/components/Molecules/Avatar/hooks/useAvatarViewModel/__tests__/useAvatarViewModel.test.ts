import { renderHook, act } from '@testing-library/react-native';
import { useAvatarViewModel } from '../index';

describe('useAvatarViewModel', () => {
  describe('isImageStatic', () => {
    it('Is true when source is a number (static require)', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: 1 }),
      );
      expect(result.current.isImageStatic).toBe(true);
    });

    it('Is false when source is an object', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: { uri: 'https://example.com/img.png' } }),
      );
      expect(result.current.isImageStatic).toBe(false);
    });

    it('Is false when source is undefined', () => {
      const { result } = renderHook(() => useAvatarViewModel({}));
      expect(result.current.isImageStatic).toBe(false);
    });
  });

  describe('isLoading', () => {
    it('Starts as true when a source is provided', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: { uri: 'https://example.com/img.png' } }),
      );
      expect(result.current.isLoading).toBe(true);
    });

    it('Starts as false when no source is provided', () => {
      const { result } = renderHook(() => useAvatarViewModel({}));
      expect(result.current.isLoading).toBe(false);
    });

    it('Becomes false when onLoad is called', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: { uri: 'https://example.com/img.png' } }),
      );

      act(() => result.current.onLoad());

      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('hasError', () => {
    it('Starts as false', () => {
      const { result } = renderHook(() => useAvatarViewModel({}));
      expect(result.current.hasError).toBe(false);
    });

    it('Becomes true when onError is called', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: { uri: 'https://example.com/img.png' } }),
      );

      act(() => result.current.onError());

      expect(result.current.hasError).toBe(true);
    });

    it('Sets isLoading to false when onError is called', () => {
      const { result } = renderHook(() =>
        useAvatarViewModel({ source: { uri: 'https://example.com/img.png' } }),
      );

      act(() => result.current.onError());

      expect(result.current.isLoading).toBe(false);
    });
  });
});
