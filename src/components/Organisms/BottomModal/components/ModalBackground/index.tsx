import type { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import React from 'react';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';

export const ModalBackground: React.FC<BottomSheetBackgroundProps> = (props) => {
  const { style } = props;
  const styles = useStyles();

  return (
    <Animated.View style={[style, styles.background]} />
  );
};
