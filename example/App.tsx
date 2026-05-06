import React from 'react';
import { useFonts } from 'expo-font';
import StorybookUI from './.rnstorybook';

export default function App() {
  const [loaded] = useFonts({
    'Geist-Light': require('./assets/fonts/Geist/ttf/Geist-Light.ttf'),
    'Geist-Regular': require('./assets/fonts/Geist/ttf/Geist-Regular.ttf'),
    'Geist-Medium': require('./assets/fonts/Geist/ttf/Geist-Medium.ttf'),
    'Geist-SemiBold': require('./assets/fonts/Geist/ttf/Geist-SemiBold.ttf'),
    'Geist-Bold': require('./assets/fonts/Geist/ttf/Geist-Bold.ttf'),
    'GeistMono-Regular': require('./assets/fonts/GeistMono/ttf/GeistMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return <StorybookUI />;
}
