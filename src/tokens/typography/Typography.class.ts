import type { FamilyKey, IFamilyProps, ISizeProps, IWeightProps } from './types';
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

  static family = <K extends FamilyKey>(props: IFamilyProps<K>): (typeof FONT_FAMILIES)[K] => {
    const { key } = props;
    return FONT_FAMILIES[key];
  };
}
