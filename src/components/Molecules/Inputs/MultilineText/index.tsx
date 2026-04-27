import type { IMultilineTextProps } from './types';
import React from 'react';
import { TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useRubberDuckStore } from '../../../../store';
import { Text } from '../../../Atoms/Text';
import { Icon } from '../../../Atoms/Icon';
import { useMultilineTextViewModel, useReanimatedStyles } from './hooks';

export const MultilineText: React.FC<IMultilineTextProps> = (props) => {
  const {
    title,
    value,
    placeholder,
    numberOfLines = 4,
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
  } = useMultilineTextViewModel(props);

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
          multiline
          numberOfLines={numberOfLines}
        />
      </Animated.View>
    </View>
  );
};
