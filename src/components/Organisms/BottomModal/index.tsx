import type { IBottomModalProps } from './types';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useStyles } from './styles';
import { useBottomModalViewModel } from './hooks';

export const BottomModal: React.FC<IBottomModalProps> = () => {
  const { height: screenHeight } = useWindowDimensions();
  const styles = useStyles();

  const { bottomSheetRef, bottomModalProps } = useBottomModalViewModel();

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
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.background}
      enablePanDownToClose>
      {bottomModalProps?.content ?? null}
    </BottomSheetModal>
  );
};

export type { IBottomModalApi } from './controllers/BottomModalApi/types';
export type { IBottomModalRefProps } from './types';
export { BottomModalApi } from './controllers';
