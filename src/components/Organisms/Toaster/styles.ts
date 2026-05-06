import type { ToasterType } from './types';
import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';

export const useStyles = (type: ToasterType | undefined) => {
  const colors = useRubberDuckStore((s) => s.colors);

  const backgroundColorMap: Record<ToasterType, string> = {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
  };

  const backgroundColor = type ? backgroundColorMap[type] : colors.info;

  return StyleSheet.create({
    wrapper: {
      position: 'absolute',
      bottom: Tokens.spacer({ key: 'lg' }),
      left: Tokens.spacer({ key: 'md' }),
      right: Tokens.spacer({ key: 'md' }),
      padding: Tokens.spacer({ key: 'md' }),
      borderRadius: Tokens.radii({ key: 'lg' }),
      flexDirection: 'row',
      alignItems: 'center',
      gap: Tokens.spacer({ key: 'sm' }),
      backgroundColor,
      zIndex: 999,
    },

    textWrapper: {
      flex: 1,
    },

    closeButton: {
      padding: Tokens.spacer({ key: 'xxs' }),
    },
  });
};
