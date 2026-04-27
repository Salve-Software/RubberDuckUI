import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RubberDuckUI } from './RubberDuckUI.class';
import { BottomModal } from './components/Organisms/BottomModal';
import type { IConfigureStore } from './store/types';

export interface IRubberDuckUIProviderProps extends IConfigureStore {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export const RubberDuckUIProvider: React.FC<IRubberDuckUIProviderProps> = ({
  children,
  darkMode,
  colors,
  style,
}) => {
  const colorsKey = JSON.stringify(colors);

  useEffect(() => {
    RubberDuckUI.configure({ darkMode, colors });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode, colorsKey]);

  return (
    <GestureHandlerRootView style={[styles.root, style]}>
      <BottomSheetModalProvider>
        {children}
        <BottomModal />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
