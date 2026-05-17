import type { IPillProps } from '../../types';
import type { IColors } from '../../../../../../../tokens';
import { useRubberDuckStore } from '../../../../../../../store';
import { Tokens } from '../../../../../../../tokens/Tokens.class';

export const usePillViewModel = (props: IPillProps) => {
  const { isSelected, pill, onPress } = props;

  const colors = useRubberDuckStore((s) => s.colors);

  const textColor: keyof IColors = isSelected
    ? Tokens.isDark({ color: colors.accent }) ? 'white' : 'black'
    : 'textPrimary';

  return {
    textColor,
    title: pill.title,
    onPress: () => onPress(pill.id),
  };
};
