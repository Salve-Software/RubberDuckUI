import type { IColors } from '../../../../tokens/colors';
import type { FONT_SIZES, FONT_WEIGHTS } from '../../../../tokens/typography';
import type { FontAlign } from './FontAlign';

export interface ITextProps {
  color?: keyof IColors;
  weight?: keyof typeof FONT_WEIGHTS;
  size?: keyof typeof FONT_SIZES;
  align?: FontAlign;
  numberOfLines?: number;
}
