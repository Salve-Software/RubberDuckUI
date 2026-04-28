import type { IColors } from '../../tokens/colors';
import type { IConfigureStore } from './IConfigureStore';

export interface IStoreState {
  isDarkMode: boolean;
  colors: IColors;

  // private
  _reset: () => void;
  _configure: (config: IConfigureStore) => void;
}
