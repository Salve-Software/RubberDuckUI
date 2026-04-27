import { useState, useRef, useCallback } from 'react';
import type { RefObject } from 'react';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { IBottomModalRefProps } from '../../types';

export const useBottomModalViewModel = (
  bottomSheetRef: RefObject<BottomSheetModal | null>
) => {
  const [bottomModalProps, setBottomModalPropsState] = useState<IBottomModalRefProps | undefined>();
  const onHideCallback = useRef<() => void>(() => {});

  const open = useCallback((props: IBottomModalRefProps) => {
    setBottomModalPropsState(props);
    requestAnimationFrame(() => {
      bottomSheetRef.current?.present();
    });
  }, [bottomSheetRef]);

  const dismiss = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, [bottomSheetRef]);

  const onDismiss = useCallback(() => {
    onHideCallback.current();
    onHideCallback.current = () => {};
  }, []);

  const handleSetOnHideCallback = useCallback((cb: () => void) => {
    onHideCallback.current = cb;
  }, []);

  return {
    bottomModalProps,
    open,
    dismiss,
    onDismiss,
    handleSetOnHideCallback,
  };
};
