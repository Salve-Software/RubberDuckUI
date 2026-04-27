import type { IBottomModalProps } from './types';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { View, useWindowDimensions } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Text } from '../../Atoms/Text';
import { useStyles } from './styles';
import { useBottomModalViewModel } from './hooks';
import { ModalList } from './components';

export const BottomModal: React.FC<IBottomModalProps> = () => {
  const { height: screenHeight } = useWindowDimensions();
  const styles = useStyles();

  const {
    bottomSheetRef,
    bottomModalProps,
    dismiss,
    onDismiss,
    handleSetOnHideCallback,
  } = useBottomModalViewModel();

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.6}
        pressBehavior="close"
      />
    )
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enableDynamicSizing
      maxDynamicContentSize={screenHeight * 0.85}
      onDismiss={onDismiss}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.background}
      enablePanDownToClose>
      <BottomSheetView>
        {bottomModalProps
          ?
          <>
            <View style={styles.header}>
              <Text weight="semibold" size='xl'>{bottomModalProps.title}</Text>
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

