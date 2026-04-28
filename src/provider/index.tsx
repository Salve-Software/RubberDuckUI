import type { IRubberDuckUIProviderProps } from './types';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useStyles } from './styles';
import { RubberDuckUI } from '../RubberDuckUI.class';
import { BottomModal } from '../components';

export const RubberDuckUIProvider: React.FC<IRubberDuckUIProviderProps> = (props) => {
  const {
    children,
    darkMode,
    colors,
    style,
  } = props;
  
  const styles = useStyles(props);

  useEffect(() => {
    RubberDuckUI.configure({ darkMode, colors });
  }, [darkMode, colors]);

  return (
    <GestureHandlerRootView style={[styles.wrapper, style]}>
      <BottomSheetModalProvider>
        {children}
        <BottomModal />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
