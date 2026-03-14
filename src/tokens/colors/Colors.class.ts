import type { IColorProps } from './types';
import { RubberDuckStore } from '../../store';

export class Colors {
  static color = (props: IColorProps): string => {
    const { key } = props;
    const currentColors = RubberDuckStore.getState().colors;
    return currentColors[key];
  };
}
