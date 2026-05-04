import type { IRadioButtonProps } from './types';
import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';
import { Text } from '../../Atoms/Text';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const RadioButton: React.FC<IRadioButtonProps> = (props) => {
  const { 
    title, 
    subTitle, 
    onPress, 
    isChecked,
  } = props;

  const styles = useStyles(props);

  const leftCheckSize = useSharedValue(isChecked ? 15 : 25);

  useEffect(() => {
    leftCheckSize.value = withSpring(isChecked ? 15 : 25);
  }, [isChecked, leftCheckSize]);

  const leftCheckStyle = useAnimatedStyle(() => {
    return {
      height: leftCheckSize.value,
      width: leftCheckSize.value,
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.wrapper}
      activeOpacity={0.8}>
      <View style={styles.leftCheckWrapper}>
        <Animated.View style={[styles.leftCheck, leftCheckStyle]} />
      </View>

      {title || subTitle ? (
        <View>
          {title ? <Text numberOfLines={1}>{title}</Text> : null}

          {subTitle ? (
            <Text color="textSecondary" numberOfLines={1}>
              {subTitle}
            </Text>
          ) : null}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
