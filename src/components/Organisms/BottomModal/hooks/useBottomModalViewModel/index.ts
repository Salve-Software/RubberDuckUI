import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { IBottomModalRefProps } from '../../types';
import { BottomModalApi, type IBottomModalApi } from '../../controllers';
import { useState, useRef, useCallback, useEffect } from 'react';

export const useBottomModalViewModel = () => {
  const [bottomModalProps, setBottomModalPropsState] = useState<IBottomModalRefProps | undefined>();
  
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const imperativeRef = useRef<IBottomModalApi | null>(null);
  const isOpenRef = useRef(false);

  const open = useCallback((props: IBottomModalRefProps) => {
    isOpenRef.current = true;
    setBottomModalPropsState(props);
    requestAnimationFrame(() => {
      bottomSheetRef.current?.present();
    });
  }, []);

  const dismiss = useCallback(() => {
    if (!isOpenRef.current) return;

    bottomSheetRef.current?.dismiss();
  }, []);

  const onDismiss = useCallback(() => {
    isOpenRef.current = false;
  }, []);

  useEffect(() => {
    imperativeRef.current = { open, dismiss };
    BottomModalApi.setRef(imperativeRef);
  }, [open, dismiss]);

  return {
    bottomSheetRef,
    bottomModalProps,
    onDismiss,
  };
};
