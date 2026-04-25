import type { IMoneyFieldProps } from './types';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import MaskInput from 'react-native-mask-input';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../../store';
import { Text } from '../../Text';
import { Icon } from '../../Icon';
import { useMoneyFieldViewModel, useReanimatedStyles } from './hooks';

export const MoneyField: React.FC<IMoneyFieldProps> = (props) => {
  const {
    title,
    value,
    placeholder,
    isRequired,
    isReadOnly,
    isDisabled,
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(props);

  const {
    mask,
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  } = useMoneyFieldViewModel(props);

  const reanimatedStyles = useReanimatedStyles({
    isFocused,
    accentColor: colors.accent,
    borderDefaultColor: colors.borderDefault,
  });

  return (
    <View style={styles.wrapper}>
      {title || isRequired
        ?
        <View style={styles.headerWrapper}>
          {title ? <Text weight="semibold" align="left">{title}</Text> : null}

          {isRequired
            ?
            <Icon
              icon="Asterisk"
              size="small_16"
              color={value ? 'success' : 'error'}
            />
            : null
          }
        </View>
        : null
      }

      <Animated.View style={[styles.inputWrapper, reanimatedStyles.inputWrapper]}>
        <MaskInput
          style={styles.textInput}
          value={value}
          mask={mask}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          autoCorrect={false}
          autoComplete="off"
          readOnly={isReadOnly}
          editable={!isDisabled}
          keyboardType="numeric"
        />
      </Animated.View>
    </View>
  );
};
