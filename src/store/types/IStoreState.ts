import type { IColors } from '../../tokens/colors';
import type { IFontFamilies } from '../../tokens/typography/types';
import type { IConfigureStore } from './IConfigureStore';

export interface IStoreState {
  isDarkMode: boolean;
  colors: IColors;
  fonts: IFontFamilies;

  // private
  _reset: () => void;
  _configure: (config: IConfigureStore) => void;
}
