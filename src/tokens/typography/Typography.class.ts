import type { TextStyle } from 'react-native';
import type {
  FamilyKey,
  IFamilyProps,
  IFontFamilies,
  ISizeProps,
  IWeightProps,
} from './types';
import { useRubberDuckStore } from '../../store';
import { FONT_SIZES, FONT_WEIGHTS } from './constants';

export class Typography {
  static size = (props: ISizeProps) => {
    const { key } = props;
    return FONT_SIZES[key];
  };

  static weight = (props: IWeightProps): TextStyle['fontWeight'] => {
    const { key } = props;
    return FONT_WEIGHTS[key];
  };

  static family = <K extends FamilyKey>(props: IFamilyProps<K>): IFontFamilies[K] => {
    const { key } = props;
    return useRubberDuckStore.getState().fonts[key];
  };
}
