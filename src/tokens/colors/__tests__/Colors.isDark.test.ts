import { Colors } from '../Colors.class';

describe('Colors.isDark', () => {
  describe('Dark colors', () => {
    it('Returns true for black', () => {
      expect(Colors.isDark({ color: '#000000' })).toBe(true);
    });

    it('Returns true for near-black', () => {
      expect(Colors.isDark({ color: '#0A0A0A' })).toBe(true);
    });

    it('Returns true for dark navy', () => {
      expect(Colors.isDark({ color: '#1C1C1E' })).toBe(true);
    });
  });

  describe('Light colors', () => {
    it('Returns false for white', () => {
      expect(Colors.isDark({ color: '#FFFFFF' })).toBe(false);
    });

    it('Returns false for near-white', () => {
      expect(Colors.isDark({ color: '#F5F5F5' })).toBe(false);
    });

    it('Returns false for the accent yellow (#FFD600)', () => {
      expect(Colors.isDark({ color: '#FFD600' })).toBe(false);
    });
  });
});
