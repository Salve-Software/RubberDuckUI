import type { ILoadingProps } from './types';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../store';
import LottieView from 'lottie-react-native';
import LoadingCircle from '../../../assets/lottie/loading-circle.json';

export const Loading: React.FC<ILoadingProps> = (props) => {
  const { color } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(props);

  return (
    <View style={styles.lottieWrapper}>
      <LottieView
        style={styles.lottie}
        source={LoadingCircle}
        colorFilters={[
          {
            keypath: 'Shape Layer 1.Ellipse 1.Stroke 1',
            color: colors[color ?? 'accent'],
          },
          {
            keypath: 'Shape Layer 2.Ellipse 1.Stroke 1',
            color: colors[color ?? 'accent'],
          },
        ]}
        autoPlay
        loop
      />
    </View>
  )
}