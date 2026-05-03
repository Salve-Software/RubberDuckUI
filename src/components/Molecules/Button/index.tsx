import type { IButtonProps } from './types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';
import { useButtonViewModel } from './hooks';
import { Text } from '../../Atoms/Text';
import { Icon } from '../../Atoms/Icon';
import { Loading } from '../../Atoms/Loading';

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    label,
    leftIcon,
    rightIcon,
    isLoading,
    disabled,
    testID,
  } = props;

  const { styles, sizes, variantColors } = useStyles(props);
  const { handlePress } = useButtonViewModel(props);

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={handlePress}
      style={styles.button}>
      {isLoading
        ?
        <Loading size={sizes.loadingSize} color={variantColors.iconColor} />
        :
        <View style={styles.content}>
          {leftIcon
            ?
            <Icon icon={leftIcon} size={sizes.iconSize} color={variantColors.iconColor} />
            : null
          }
          <Text size={sizes.fontSize} weight="semibold" color={variantColors.text}>{label}</Text>
          {rightIcon
            ?
            <Icon icon={rightIcon} size={sizes.iconSize} color={variantColors.iconColor} />
            : null
          }
        </View>
      }
    </TouchableOpacity>
  );
};
