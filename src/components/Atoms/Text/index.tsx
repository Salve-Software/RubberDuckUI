import type { ITextProps } from './types';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text as TextRN } from 'react-native';
import { useTextViewModel } from './hooks';

export const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { numberOfLines } = props;
  const { content, textStyle } = useTextViewModel(props);

  return (
    <TextRN style={textStyle} numberOfLines={numberOfLines}>
      {content}
    </TextRN>
  );
};
