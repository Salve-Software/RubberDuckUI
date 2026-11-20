import type { IColorProps } from '../../tokens/colors';
import type { FamilyKey, IFamilyProps } from '../../tokens/typography';
import { useMemo } from 'react';
import { Tokens } from '../../tokens/Tokens.class';
import { useRubberDuckStore } from '../../store';

export const useTokens = () => {
  const colors = useRubberDuckStore((state) => state.colors);
  const fonts = useRubberDuckStore((state) => state.fonts);

  return useMemo(() => ({
    colors: (props: IColorProps) => colors[props.key],
    spacer: Tokens.spacer,
    radii: Tokens.radii,
    fontSize: Tokens.fontSize,
    fontWeight: Tokens.fontWeight,
    fontFamily: <K extends FamilyKey>(props: IFamilyProps<K>) => fonts[props.key],
  }), [colors, fonts]);
};
