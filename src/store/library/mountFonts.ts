import type { IFontFamilies, IFontFamiliesConfig } from '../../tokens/typography/types';
import { FONT_FAMILIES } from '../../tokens/typography/constants/FONT_FAMILIES';

export const mountFonts = (fonts: IFontFamiliesConfig): IFontFamilies => ({
  sans: { ...FONT_FAMILIES.sans, ...fonts.sans },
  mono: { ...FONT_FAMILIES.mono, ...fonts.mono },
  display: { ...FONT_FAMILIES.display, ...fonts.display },
});
