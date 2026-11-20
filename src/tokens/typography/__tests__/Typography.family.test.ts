import { Typography } from '../Typography.class';
import { useRubberDuckStore } from '../../../store';

describe('Typography.family', () => {
  beforeEach(() => {
    useRubberDuckStore.getState()._reset();
  });

  it('Returns the default sans family', () => {
    expect(Typography.family({ key: 'sans' }).medium).toBe('Geist-Medium');
  });

  it('Falls back to the bold sans for the display family', () => {
    expect(Typography.family({ key: 'display' })).toEqual({ bold: 'Geist-Bold', black: 'Geist-Bold' });
  });

  it('Returns the configured family', () => {
    useRubberDuckStore.getState()._configure({
      fonts: { display: { bold: 'BarlowCondensed-ExtraBoldItalic' } },
    });

    expect(Typography.family({ key: 'display' }).bold).toBe('BarlowCondensed-ExtraBoldItalic');
  });
});

describe('Typography.size', () => {
  it('Returns the hero step', () => {
    expect(Typography.size({ key: 'hero' })).toBe(56);
  });
});
