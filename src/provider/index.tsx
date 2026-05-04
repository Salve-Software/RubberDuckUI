import type { IRubberDuckUIProviderProps } from './types';
import React, { useEffect, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useStyles } from './styles';
import { RubberDuckUI } from '../RubberDuckUI.class';
import { BottomModal, Toaster } from '../components';

export const RubberDuckUIProvider: React.FC<IRubberDuckUIProviderProps> = (props) => {
  const {
    children,
    darkMode,
    colors,
    style,
    onReady,
  } = props;

  const styles = useStyles(props);

  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    RubberDuckUI.configure({ darkMode, colors });
    onReadyRef.current?.();
  }, [darkMode, colors]);

  return (
    <GestureHandlerRootView style={[styles.wrapper, style]}>
      <BottomSheetModalProvider>
        {children}
        <BottomModal />
        <Toaster />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
