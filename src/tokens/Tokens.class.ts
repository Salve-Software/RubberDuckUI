import type { IColorProps } from './colors';
import type { IRadiiProps, ISpacerProps } from './spacer';
import type { IFamilyProps, ISizeProps, IWeightProps } from './typography';
import { Typography } from './typography';
import { Colors } from './colors';
import { Spacer } from './spacer';

export class Tokens {
  static color = (props: IColorProps) => {
    return Colors.color(props);
  };

  static spacer = (props: ISpacerProps) => {
    return Spacer.spacer(props);
  };

  static radii = (props: IRadiiProps) => {
    return Spacer.radii(props);
  };

  static fontSize = (props: ISizeProps) => {
    return Typography.size(props);
  };

  static fontWeight = (props: IWeightProps) => {
    return Typography.weight(props);
  };

  static fontFamily = (props: IFamilyProps) => {
    return Typography.family(props);
  };
}
