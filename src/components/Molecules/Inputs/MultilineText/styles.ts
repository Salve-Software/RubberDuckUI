import type { IMultilineTextProps } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../../store';
import { Tokens } from '../../../../tokens/Tokens.class';

export const useStyles = (props: IMultilineTextProps) => {
  const { isDisabled, numberOfLines = 4 } = props;

  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    wrapper: {
      gap: Tokens.spacer({ key: 'xxs' }),
      opacity: isDisabled ? 0.5 : 1,
    },

    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Tokens.spacer({ key: 'xxs' }),
    },

    inputWrapper: {
      borderWidth: 2,
      borderColor: colors.borderDefault,
      borderRadius: Tokens.radii({ key: 'xs' }),
      backgroundColor: colors.background,
      minHeight: 24 * numberOfLines,
    },

    textInput: {
      paddingVertical: Tokens.spacer({ key: 'sm' }),
      paddingHorizontal: Tokens.spacer({ key: 'sm' }),
      fontSize: Tokens.fontSize({ key: 'md' }),
      color: colors.textPrimary,
      textAlignVertical: 'top',
      minHeight: 24 * numberOfLines,
    },
  });
};
