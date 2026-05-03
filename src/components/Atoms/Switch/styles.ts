import { StyleSheet } from 'react-native';
import { useRubberDuckStore } from '../../../store';
import { Tokens } from '../../../tokens/Tokens.class';
import { SWITCH_TRACK_WIDTH, SWITCH_TRACK_HEIGHT, SWITCH_THUMB_SIZE, SWITCH_PADDING } from './constants';

export const useStyles = () => {
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    track: {
      width: SWITCH_TRACK_WIDTH,
      height: SWITCH_TRACK_HEIGHT,
      borderRadius: Tokens.radii({ key: 'full' }),
      padding: SWITCH_PADDING,
      justifyContent: 'center',
    },

    thumb: {
      width: SWITCH_THUMB_SIZE,
      height: SWITCH_THUMB_SIZE,
      borderRadius: Tokens.radii({ key: 'full' }),
      backgroundColor: colors.background,
    },
  });
};
