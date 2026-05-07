import type { ISwitchProps } from './types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { SWITCH_PADDING } from './constants';
import { useRubberDuckStore } from '../../../store';
import { useSwitchViewModel, useReanimatedStyles } from './hooks';

export const Switch: React.FC<ISwitchProps> = (props) => {
  const { isOn, disabled } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(!!disabled);
  const reanimatedStyles = useReanimatedStyles({
    isOn: !!isOn,
    accentColor: colors.accent,
    borderDefaultColor: colors.borderDefault,
  });
  const { onToggle } = useSwitchViewModel(props);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onToggle}
      disabled={!!disabled}
      hitSlop={SWITCH_PADDING}
      style={{ padding: SWITCH_PADDING }}
      accessibilityRole="switch"
      accessibilityState={{ checked: !!isOn, disabled: !!disabled }}>
      <Animated.View style={[styles.track, reanimatedStyles.track]}>
        <Animated.View style={[styles.thumb, reanimatedStyles.thumb]} />
      </Animated.View>
    </TouchableOpacity>
  );
};
