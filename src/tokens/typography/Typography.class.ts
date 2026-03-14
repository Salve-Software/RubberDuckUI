import type { IFamilyProps, ISizeProps, IWeightProps } from './types';
import { FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS } from './constants';

export class Typography {
  static size = (props: ISizeProps) => {
    const { key } = props;
    return FONT_SIZES[key];
  };

  static weight = (props: IWeightProps) => {
    const { key } = props;
    return FONT_WEIGHTS[key];
  };

  static family = (props: IFamilyProps) => {
    const { key } = props;
    return FONT_FAMILIES[key];
  };
}
