import type { IConfigureStore } from './store/types';
import { RubberDuckStore } from './store';

export class RubberDuckUI {
  /**
   * Configures the RubberDuckUI design system.
   *
   * Call this method once at the entry point of your app to customize
   * the theme, colors, dark mode, and locale.
   *
   * @example
   * RubberDuckUI.configure({
   *   darkMode: true,
   *   colors: {
   *     accent: '#E91E63',
   *   },
   * });
   */
  static configure = (props: IConfigureStore): void => {
    RubberDuckStore.getState()._configure(props);
  };

  /**
   * Resets the design system to its default configuration.
   *
   * Restores the original theme with the default yellow duck accent
   * and English locale.
   *
   * @example
   * RubberDuckUI.reset();
   */
  static reset = (): void => {
    RubberDuckStore.getState()._reset();
  };
}
