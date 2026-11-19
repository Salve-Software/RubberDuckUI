import type { IStoreState } from '../types';
import { useRubberDuckStore } from '../index';
import { FONT_FAMILIES } from '../../tokens/typography/constants/FONT_FAMILIES';

const configure: IStoreState['_configure'] = (config) =>
  useRubberDuckStore.getState()._configure(config);
const reset = () => useRubberDuckStore.getState()._reset();
const fonts = () => useRubberDuckStore.getState().fonts;

describe('store._configure', () => {
  beforeEach(() => {
    reset();
  });

  describe('fonts', () => {
    it('Starts with the default families', () => {
      expect(fonts()).toEqual(FONT_FAMILIES);
    });

    it('Replaces only the weights that were given', () => {
      configure({ fonts: { sans: { regular: 'Barlow-Regular', bold: 'Barlow-Bold' } } });

      expect(fonts().sans).toEqual({
        ...FONT_FAMILIES.sans,
        regular: 'Barlow-Regular',
        bold: 'Barlow-Bold',
      });
    });

    it('Keeps the families that were NOT given', () => {
      configure({ fonts: { display: { black: 'BarlowCondensed-BlackItalic' } } });

      expect(fonts().sans).toEqual(FONT_FAMILIES.sans);
      expect(fonts().display.black).toBe('BarlowCondensed-BlackItalic');
    });

    it('Does NOT drop the configured fonts when a later call omits them', () => {
      configure({ fonts: { mono: { regular: 'DMMono-Medium' } } });
      configure({ darkMode: false });

      expect(fonts().mono.regular).toBe('DMMono-Medium');
    });

    it('Restores the default families on reset', () => {
      configure({ fonts: { sans: { regular: 'Barlow-Regular' } } });
      reset();

      expect(fonts()).toEqual(FONT_FAMILIES);
    });
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
