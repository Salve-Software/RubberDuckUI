import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';

export const TRACK_WIDTH = Tokens.spacer({ key: 'xxl' });
export const TRACK_HEIGHT = Tokens.spacer({ key: 'xl' });
export const THUMB_SIZE = Tokens.spacer({ key: 'lg' });
export const TRACK_PADDING = Tokens.spacer({ key: 'xxs' });

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    track: {
      width: TRACK_WIDTH,
      height: TRACK_HEIGHT,
      borderRadius: Tokens.radii({ key: 'full' }),
      padding: TRACK_PADDING,
      justifyContent: 'center',
    },

    thumb: {
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: Tokens.radii({ key: 'full' }),
      backgroundColor: colors.background,
    },
  });
};
