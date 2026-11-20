export interface IFontFamilies {
  sans: {
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  mono: {
    regular: string;
  };
  display: {
    bold: string;
    black: string;
  };
}

export type IFontFamiliesConfig = {
  [K in keyof IFontFamilies]?: Partial<IFontFamilies[K]>;
};
