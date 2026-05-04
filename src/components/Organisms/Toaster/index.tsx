import type { IToasterProps } from './types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import { useToasterViewModel, useReanimatedStyles } from './hooks';
import { TYPE_ICON_MAP } from './constants';
import { Text } from '../../Atoms/Text';
import { Icon } from '../../Atoms/Icon';

export const Toaster: React.FC<IToasterProps> = () => {
  const { toasterProps, isVisible, hide } = useToasterViewModel();
  const styles = useStyles(toasterProps?.type);
  const { wrapper, gesture } = useReanimatedStyles(isVisible, hide);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        pointerEvents={isVisible ? 'box-none' : 'none'}
        style={[styles.wrapper, wrapper]}>
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
            <TouchableOpacity onPress={hide} style={styles.closeButton}>
              <Icon icon="X" size="small_16" color="white" />
            </TouchableOpacity>
          </>
          : null
        }
      </Animated.View>
    </GestureDetector>
  );
};

export type { IToasterApi } from './controllers/ToasterApi/types';
export type { IToasterRefProps, ToasterType } from './types';
export { ToasterApi } from './controllers';
