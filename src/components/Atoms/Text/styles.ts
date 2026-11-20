import type { ITextProps } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = (props: ITextProps) => {
  const {
    color = 'textPrimary',
    align,
    size = 'md',
    weight = 'regular',
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const fonts = useRubberDuckStore((s) => s.fonts);

  const fontFamily = fonts.sans[weight];
  const fontSize = Tokens.fontSize({ key: size });
  const boldFontFamily = fonts.sans.semibold;

  return StyleSheet.create({
    text: {
      fontFamily,
      fontSize,
      textAlign: align,
      color: colors[color],
    },
    
    boldText: {
      fontFamily: boldFontFamily,
    },
  });
};
