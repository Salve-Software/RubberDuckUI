import type { IStoreState } from './types';
import { dark } from '../tokens/colors/dark';
import { FONT_FAMILIES } from '../tokens/typography/constants/FONT_FAMILIES';

export const defaultState: IStoreState = {
  isDarkMode: true,
  colors: dark,
  fonts: FONT_FAMILIES,
  _configure: () => {},
  _reset: () => {},
} as const;
