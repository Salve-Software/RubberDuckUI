import type { IStoreState } from './types';
import { dark } from '../tokens/colors/dark';

export const defaultState: IStoreState = {
  isDarkMode: true,
  colors: dark,
  _configure: () => {},
  _reset: () => {},
} as const;
