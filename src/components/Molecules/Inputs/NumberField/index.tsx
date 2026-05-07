import type { INumberFieldProps } from './types';
import React from 'react';
import { TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../../store';
import { Text } from '../../../Atoms/Text';
import { Icon } from '../../../Atoms/Icon';
import { useNumberFieldViewModel, useReanimatedStyles } from './hooks';

export const NumberField: React.FC<INumberFieldProps> = (props) => {
  const {
    title,
    value,
    placeholder,
    rightLabel,
    isRequired,
    isReadOnly,
    isDisabled,
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(props);

  const {
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  } = useNumberFieldViewModel(props);

  const reanimatedStyles = useReanimatedStyles({
    isFocused,
    accentColor: colors.accent,
    borderDefaultColor: colors.borderSubtle,
  });

  return (
    <View style={styles.wrapper}>
      {title || isRequired
        ?
        <View style={styles.headerWrapper}>
          {title ? <Text size="sm" weight="semibold" align="left">{title}</Text> : null}

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
        <TextInput
          testID="number-field-input"
          style={styles.textInput}
          value={value}
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

        {rightLabel
          ?
          <View style={styles.rightLabel}>
            <Text size="xs" color="textSecondary">{rightLabel}</Text>
          </View>
          : null
        }
      </Animated.View>
    </View>
  );
};
