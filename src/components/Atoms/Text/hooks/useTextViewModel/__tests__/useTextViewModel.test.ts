import { renderHook } from '@testing-library/react-native';
import { useTextViewModel } from '../index';

describe('useTextViewModel', () => {
  describe('content', () => {
    it('Returns children as-is when there are no bold markers', () => {
      const { result } = renderHook(() =>
        useTextViewModel({ children: 'Hello world' }),
      );
      expect(result.current.content).toBe('Hello world');
    });

    it('Returns children as-is when children is not a string', () => {
      const { result } = renderHook(() => useTextViewModel({ children: 42 }));
      expect(result.current.content).toBe(42);
    });

    it('Returns an array of segments when children has bold markers', () => {
      const { result } = renderHook(() =>
        useTextViewModel({ children: 'I agree to the **Terms & Privacy Policy**' }),
      );
      expect(Array.isArray(result.current.content)).toBe(true);
    });
  });
});
