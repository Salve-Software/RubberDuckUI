// fonts
declare module '*.ttf' {
  const content: string;
  export default content;
}

// images
declare module '*.png' {
  const value: number;
  export default value;
}
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// env
declare module '@env' {
  export const BASE_URL: string;
}
