import type { IColorProps } from '../../tokens/colors';
import { useMemo } from 'react';
import { Tokens } from '../../tokens/Tokens.class';
import { useRubberDuckStore } from '../../store';

export const useTokens = () => {
  const colors = useRubberDuckStore((state) => state.colors);

  return useMemo(() => ({
    colors: (props: IColorProps) => colors[props.key],
    spacer: Tokens.spacer,
    radii: Tokens.radii,
    fontSize: Tokens.fontSize,
    fontWeight: Tokens.fontWeight,
    fontFamily: Tokens.fontFamily,
  }), [colors]);
};
