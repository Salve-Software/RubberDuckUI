import type { IStoreState } from './types';
import { create } from 'zustand';
import { defaultState } from './defaultState';
import { mountFonts } from './library';
import { dark } from '../tokens/colors/dark';
import { light } from '../tokens/colors/light';

export const useRubberDuckStore = create<IStoreState>((set) => ({
  ...defaultState,

  // private
  _configure: (config) => {
    set((state) => {
      const isDarkMode = config.darkMode ?? state.isDarkMode;
      return {
        isDarkMode,
        colors: { ...(isDarkMode ? dark : light), ...config.colors },
        fonts: config.fonts ? mountFonts(config.fonts) : state.fonts,
      };
    });
  },
  _reset: () =>
    set({
      isDarkMode: defaultState.isDarkMode,
      colors: defaultState.colors,
      fonts: defaultState.fonts,
    }),
}));
