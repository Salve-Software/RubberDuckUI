import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RubberDuckUI } from './RubberDuckUI.class';
import { BottomModal } from './components/Organisms/BottomModal';
import type { IConfigureStore } from './store/types';

export interface IRubberDuckUIProviderProps extends IConfigureStore {
  children: ReactNode;
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export const RubberDuckUIProvider: React.FC<IRubberDuckUIProviderProps> = ({ children, darkMode, colors }) => {
  useEffect(() => {
    RubberDuckUI.configure({ darkMode, colors });
  }, [darkMode, colors]);

  return (
    <GestureHandlerRootView style={styles.root}>
      <BottomSheetModalProvider>
        {children}
        <BottomModal />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
