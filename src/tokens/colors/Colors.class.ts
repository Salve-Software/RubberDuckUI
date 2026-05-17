import type { IColorProps, IIsDarkProps } from './types';
import { useRubberDuckStore } from '../../store';

export class Colors {
  static color = (props: IColorProps): string => {
    const { key } = props;
    const currentColors = useRubberDuckStore.getState().colors;
    return currentColors[key];
  };

  static isDark = (props: IIsDarkProps): boolean => {
    const { color } = props;

    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const toLinear = (c: number) =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

    const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

    return luminance < 0.179;
  }
}
