import React, {
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text } from '../../Atoms/Text';
import { useStyles } from './styles';
import { useBottomModalViewModel } from './hooks';
import { BottomModalApi } from './controllers';
import { ModalList } from './components';
import type { IBottomModalApi } from './controllers/BottomModalApi/types';
import type { IBottomModalProps } from './types';

export const BottomModal: React.FC<IBottomModalProps> = () => {
  const { height: screenHeight } = useWindowDimensions();
  const styles = useStyles();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const imperativeRef = useRef<IBottomModalApi | null>(null);

  const {
    bottomModalProps,
    open,
    dismiss,
    onDismiss,
    handleSetOnHideCallback,
  } = useBottomModalViewModel(bottomSheetRef);

  useEffect(() => {
    imperativeRef.current = { open, dismiss };
    BottomModalApi.setRef(imperativeRef);
  }, [open, dismiss]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) =>
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.6}
        pressBehavior="close"
      />,
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enableDynamicSizing
      maxDynamicContentSize={screenHeight * 0.85}
      onDismiss={onDismiss}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.background}
      enablePanDownToClose
    >
      <BottomSheetView>
        {bottomModalProps
          ?
          <>
            <View style={styles.header}>
              <Text weight="semibold">{bottomModalProps.title}</Text>
              {bottomModalProps.onClear
                ?
                <TouchableOpacity
                  onPress={bottomModalProps.onClear}
                  style={styles.clearButton}>
                  <Text color="accent" size="sm">
                    {bottomModalProps.clearLabel ?? 'Clear'}
                  </Text>
                </TouchableOpacity>
                : null
              }
            </View>
            <ModalList
              items={bottomModalProps.items}
              emptyState={bottomModalProps.emptyState}
              setOnHideCallback={handleSetOnHideCallback}
              onClose={dismiss}
            />
          </>
          : null
        }
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export type { IBottomModalProps } from './types';
export type { IBottomModalRefProps } from './types';
export type { IModalListItem, ModalListItemType } from './types';
export type { IEmptyStateProps } from './types';
export { BottomModalApi } from './controllers';
export type { IBottomModalApi } from './controllers/BottomModalApi/types';
