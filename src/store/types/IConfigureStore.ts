import type { IColors } from '../../tokens/colors';
import type { IFontFamiliesConfig } from '../../tokens/typography/types';

export interface IConfigureStore {
  darkMode?: boolean;
  colors?: Partial<IColors>;
  fonts?: IFontFamiliesConfig;
}
