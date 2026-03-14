import type { IColorProps } from './types';
import { useRubberDuckStore } from '../../store';

export class Colors {
  static color = (props: IColorProps): string => {
    const { key } = props;
    const currentColors = useRubberDuckStore.getState().colors;
    return currentColors[key];
  };
}
