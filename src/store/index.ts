import type { IStoreState } from './types';
import { create } from 'zustand';
import { defaultState } from './defaultState';

export const RubberDuckStore = create<IStoreState>((set) => ({
  ...defaultState,

  // private
  _configure: (config) => {
    set((state) => {
      return {
        isDarkMode: config.darkMode ?? state.isDarkMode,
        colors: config.colors ?? state.colors,
      };
    });
  },
  _reset: () => set({ ...defaultState }),
}));
