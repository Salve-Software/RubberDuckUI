import type { IStoreState } from './types';
import { create } from 'zustand';
import { defaultState } from './defaultState';
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
      };
    });
  },
  _reset: () => set({ ...defaultState }),
}));
