import type { TextStyle } from 'react-native';
import type { IConfigureStore } from './store/types';
import type { IColorProps } from './tokens/colors';
import type { IRadiiProps, ISpacerProps } from './tokens/spacer';
import type { FamilyKey, IFamilyProps, ISizeProps, IWeightProps } from './tokens/typography';
import { useRubberDuckStore } from './store';
import { Tokens } from './tokens/Tokens.class';

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
    useRubberDuckStore.getState()._configure(props);
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
    useRubberDuckStore.getState()._reset();
  };
  
  /**
   * Returns a color value from the active theme.
   *
   * @example
   * const accent = RubberDuckUI.colors({ key: 'accent' });
   */
  static colors = (props: IColorProps): string => {
    return Tokens.color(props);
  };

  /**
   * Returns a spacing value in pixels from the spacing scale.
   *
   * @example
   * const gap = RubberDuckUI.spacer({ key: 'md' });
   */
  static spacer = (props: ISpacerProps): number => {
    return Tokens.spacer(props);
  };

  /**
   * Returns a border-radius value in pixels from the radii scale.
   *
   * @example
   * const rounded = RubberDuckUI.radii({ key: 'md' });
   */
  static radii = (props: IRadiiProps): number => {
    return Tokens.radii(props);
  };

  /**
   * Returns a font size value in pixels from the type scale.
   *
   * @example
   * const body = RubberDuckUI.fontSize({ key: 'md' });
   */
  static fontSize = (props: ISizeProps): number => {
    return Tokens.fontSize(props);
  };

  /**
   * Returns a font weight value from the weight scale.
   *
   * @example
   * const bold = RubberDuckUI.fontWeight({ key: 'bold' });
   */
  static fontWeight = (props: IWeightProps): TextStyle['fontWeight'] => {
    return Tokens.fontWeight(props);
  };

  /**
   * Returns a font family string for the given typeface key.
   *
   * @example
   * const sans = RubberDuckUI.fontFamily({ key: 'sans' });
   */
  static fontFamily = <K extends FamilyKey>(props: IFamilyProps<K>) => {
    return Tokens.fontFamily(props);
  };
}
