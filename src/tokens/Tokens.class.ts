import type { TextStyle } from 'react-native';
import type { IColorProps } from './colors';
import type { IRadiiProps, ISpacerProps } from './spacer';
import type { FamilyKey, IFamilyProps, ISizeProps, IWeightProps } from './typography';
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

  static fontWeight = (props: IWeightProps): TextStyle['fontWeight'] => {
    return Typography.weight(props);
  };

  static fontFamily = <K extends FamilyKey>(props: IFamilyProps<K>) => {
    return Typography.family(props);
  };
}
