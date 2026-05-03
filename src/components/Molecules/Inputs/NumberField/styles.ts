import type { INumberFieldProps } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../../store';
import { Tokens } from '../../../../tokens/Tokens.class';

export const useStyles = (props: INumberFieldProps) => {
  const { isDisabled } = props;

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
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.borderDefault,
      borderRadius: Tokens.radii({ key: 'lg' }),
      backgroundColor: colors.background,
    },

    textInput: {
      minHeight: 48,
      flex: 1,
      paddingVertical: Tokens.spacer({ key: 'sm' }),
      paddingHorizontal: Tokens.spacer({ key: 'sm' }),
      fontSize: Tokens.fontSize({ key: 'md' }),
      color: colors.textPrimary,
    },

    rightLabel: {
      backgroundColor: colors.surface,
      borderRadius: Tokens.radii({ key: 'sm' }),
      paddingVertical: Tokens.spacer({ key: 'xxs' }),
      paddingHorizontal: Tokens.spacer({ key: 'xs' }),
      marginRight: Tokens.spacer({ key: 'sm' }),
    },
  });
};
