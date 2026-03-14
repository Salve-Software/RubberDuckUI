import type { IRadiiProps, ISpacerProps } from './types';
import { RADII, SPACING } from './constants';

export class Spacer {
  static spacer = (props: ISpacerProps) => {
    const { key } = props;
    return SPACING[key];
  };

  static radii = (props: IRadiiProps) => {
    const { key } = props;
    return RADII[key];
  };
}
