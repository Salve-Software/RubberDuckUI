import type { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';

export const ModalBackground: React.FC<BottomSheetBackgroundProps> = (props) => {
  const { style } = props;
  const styles = useStyles();

  return (
    <View style={[style, styles.background]} />
  );
};
