import type { ISimpleTextProps } from './types';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../../store';
import { Text } from '../../../Atoms/Text';
import { Icon } from '../../../Atoms/Icon';
import { useSimpleTextViewModel, useReanimatedStyles } from './hooks';

export const SimpleText: React.FC<ISimpleTextProps> = (props) => {
  const {
    title,
    value,
    placeholder,
    isRequired,
    isReadOnly,
    isDisabled,
    rightIcon,
    secureTextEntry,
    autoCapitalize,
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const styles = useStyles(props);
  
  const {
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
  } = useSimpleTextViewModel(props);
  
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
        <TextInput
          testID="simple-text-input"
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          autoComplete="off"
          readOnly={isReadOnly}
          editable={!isDisabled}
          secureTextEntry={secureTextEntry}
        />

        {rightIcon
          ?
          <TouchableOpacity
            style={styles.rightIconWrapper}
            onPress={rightIcon.onPress}
            hitSlop={8}
            activeOpacity={0.8}>
            <Icon icon={rightIcon.icon} size="small_16" color="textSecondary" />
          </TouchableOpacity>
          : null
        }
      </Animated.View>
    </View>
  );
};
