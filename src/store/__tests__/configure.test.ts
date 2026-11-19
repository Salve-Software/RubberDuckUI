import type { IStoreState } from '../types';
import { useRubberDuckStore } from '../index';

const configure: IStoreState['_configure'] = (config) =>
  useRubberDuckStore.getState()._configure(config);
const reset = () => useRubberDuckStore.getState()._reset();

describe('store._configure', () => {
  beforeEach(() => {
    reset();
  });

  describe('reset', () => {
    it('Keeps configure working after a reset', () => {
      reset();
      configure({ colors: { accent: '#288c50' } });

      expect(useRubberDuckStore.getState().colors.accent).toBe('#288c50');
    });

    it('Restores the dark palette', () => {
      configure({ darkMode: false, colors: { accent: '#288c50' } });
      reset();

      expect(useRubberDuckStore.getState().isDarkMode).toBe(true);
      expect(useRubberDuckStore.getState().colors.accent).not.toBe('#288c50');
    });
  });

  describe('colors', () => {
    it('Applies the color overrides on top of the active palette', () => {
      configure({ darkMode: false, colors: { accent: '#288c50' } });

      expect(useRubberDuckStore.getState().isDarkMode).toBe(false);
      expect(useRubberDuckStore.getState().colors.accent).toBe('#288c50');
    });
  });
});
