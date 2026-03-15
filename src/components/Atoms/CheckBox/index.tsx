import type { ICheckBoxProps } from './types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { Text } from '../Text';
import { useCheckBoxViewModel, useReanimatedStyles } from './hooks';
import { Icon } from '../Icon';

export const CheckBox: React.FC<ICheckBoxProps> = (props) => {
  const { title, subTitle, isChecked } = props;

  const styles = useStyles(props);
  const reanimatedStyles = useReanimatedStyles({ isChecked: !!isChecked });
  const { onCheck } = useCheckBoxViewModel(props);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.7}
      onPress={onCheck}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
      <View style={styles.outerCheckbox}>
        <Animated.View
          style={[styles.innerCheckbox, reanimatedStyles.checkbox]}>
          <Icon icon={'Check'} />
        </Animated.View>
      </View>

      {title || subTitle ? (
        <View style={styles.titles}>
          {title ? <Text>{title}</Text> : null}

          {subTitle ? <Text weight="light">{subTitle}</Text> : null}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
