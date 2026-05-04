import type { IToasterProps, ToasterType } from './types';
import type { IconName } from '../../Atoms/Icon/types/IconName';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useToasterViewModel, useReanimatedStyles } from './hooks';
import { Text } from '../../Atoms/Text';
import { Icon } from '../../Atoms/Icon';

const TYPE_ICON_MAP: Record<ToasterType, IconName> = {
  success: 'CircleCheck',
  error: 'CircleX',
  warning: 'TriangleAlert',
  info: 'CircleAlert',
};

export const Toaster: React.FC<IToasterProps> = () => {
  const { toasterProps, isVisible } = useToasterViewModel();
  const styles = useStyles({ type: toasterProps?.type });
  const reanimatedStyles = useReanimatedStyles({ isVisible });

  return (
    <Animated.View
      pointerEvents={isVisible ? 'box-none' : 'none'}
      style={[styles.container, reanimatedStyles.container]}>
      {toasterProps
        ?
        <>
          <Icon
            icon={TYPE_ICON_MAP[toasterProps.type]}
            size="small_16"
            color="white"
          />
          <View style={styles.textWrapper}>
            <Text weight="semibold" color="textInverse">
              {toasterProps.title}
            </Text>
            {toasterProps.description
              ?
              <Text color="textInverse">
                {toasterProps.description}
              </Text>
              : null
            }
          </View>
        </>
        : null
      }
    </Animated.View>
  );
};

export type { IToasterApi } from './controllers/ToasterApi/types';
export type { IToasterRefProps, ToasterType } from './types';
export { ToasterApi } from './controllers';
