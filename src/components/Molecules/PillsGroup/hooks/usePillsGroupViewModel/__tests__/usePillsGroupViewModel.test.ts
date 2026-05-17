import { renderHook } from '@testing-library/react-native';
import { usePillsGroupViewModel } from '../index';

const pills = [
  { id: '1', title: 'Todos' },
  { id: '2', title: 'Pendentes' },
  { id: '3', title: 'Aprovados' },
];

describe('usePillsGroupViewModel', () => {
  describe('initialScrollIndex', () => {
    it('Is undefined when the first pill is selected', () => {
      const { result } = renderHook(() =>
        usePillsGroupViewModel({ pills, idSelected: '1', onPress: jest.fn() }),
      );
      expect(result.current.initialScrollIndex).toBeUndefined();
    });

    it('Is undefined when idSelected does not match any pill', () => {
      const { result } = renderHook(() =>
        usePillsGroupViewModel({ pills, idSelected: 'none', onPress: jest.fn() }),
      );
      expect(result.current.initialScrollIndex).toBeUndefined();
    });

    it('Returns the correct index when a middle pill is selected', () => {
      const { result } = renderHook(() =>
        usePillsGroupViewModel({ pills, idSelected: '2', onPress: jest.fn() }),
      );
      expect(result.current.initialScrollIndex).toBe(1);
    });

    it('Returns the correct index when the last pill is selected', () => {
      const { result } = renderHook(() =>
        usePillsGroupViewModel({ pills, idSelected: '3', onPress: jest.fn() }),
      );
      expect(result.current.initialScrollIndex).toBe(2);
    });
  });
});
