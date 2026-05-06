import type { IColors } from '../../tokens/colors';

export interface IConfigureStore {
  darkMode?: boolean;
  colors?: Partial<IColors>;
}
