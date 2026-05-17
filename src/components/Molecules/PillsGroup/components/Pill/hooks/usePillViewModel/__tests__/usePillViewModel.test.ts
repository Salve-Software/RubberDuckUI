import { renderHook } from '@testing-library/react-native';
import { usePillViewModel } from '../index';

const pill = { id: '1', title: 'Todos' };
const onPress = jest.fn();

describe('usePillViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('textColor', () => {
    it('Returns black when selected and accent is a light color', () => {
      const { result } = renderHook(() =>
        usePillViewModel({ pill, isSelected: true, onPress }),
      );
      expect(result.current.textColor).toBe('black');
    });

    it('Returns textPrimary when not selected', () => {
      const { result } = renderHook(() =>
        usePillViewModel({ pill, isSelected: false, onPress }),
      );
      expect(result.current.textColor).toBe('textPrimary');
    });
  });

  describe('title', () => {
    it('Returns the pill title', () => {
      const { result } = renderHook(() =>
        usePillViewModel({ pill, isSelected: false, onPress }),
      );
      expect(result.current.title).toBe('Todos');
    });
  });

  describe('onPress', () => {
    it('Calls onPress with the pill id when invoked', () => {
      const { result } = renderHook(() =>
        usePillViewModel({ pill, isSelected: false, onPress }),
      );

      result.current.onPress();

      expect(onPress).toHaveBeenCalledWith('1');
    });
  });
});
