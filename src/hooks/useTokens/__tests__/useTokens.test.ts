import { act, renderHook } from '@testing-library/react-native';
import { useTokens } from '../index';
import { useRubberDuckStore } from '../../../store';

describe('useTokens', () => {
  beforeEach(() => {
    act(() => {
      useRubberDuckStore.getState()._reset();
    });
  });

  describe('fontFamily', () => {
    it('Returns the default family', () => {
      const { result } = renderHook(() => useTokens());

      expect(result.current.fontFamily({ key: 'sans' }).bold).toBe('Geist-Bold');
    });

    it('Follows the fonts configured after the first render', () => {
      const { result } = renderHook(() => useTokens());

      act(() => {
        useRubberDuckStore.getState()._configure({ fonts: { sans: { bold: 'Barlow-Bold' } } });
      });

      expect(result.current.fontFamily({ key: 'sans' }).bold).toBe('Barlow-Bold');
    });
  });
});
