import type { ICheckBoxProps } from './types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../store';
import { Text } from '../../Atoms/Text';
import { useCheckBoxViewModel, useReanimatedStyles } from './hooks';
import { Icon } from '../../Atoms/Icon';

export const CheckBox: React.FC<ICheckBoxProps> = (props) => {
  const { title, subTitle, isChecked } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(props);
  const reanimatedStyles = useReanimatedStyles({
    isChecked: !!isChecked,
    accentColor: colors.accent,
    borderDefaultColor: colors.borderDefault,
  });
  const { onCheck } = useCheckBoxViewModel(props);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={1}
      onPress={onCheck}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
      <Animated.View style={[styles.outerCheckbox, reanimatedStyles.outerCheckbox]}>
        <Animated.View
          style={[styles.innerCheckbox, reanimatedStyles.innerCheckbox]}>
          <Icon icon={'Check'} />
        </Animated.View>
      </Animated.View>

      {title || subTitle ? (
        <View style={styles.titles}>
          {title ? <Text size="sm">{title}</Text> : null}

          {subTitle ? <Text size="sm" weight="light">{subTitle}</Text> : null}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
