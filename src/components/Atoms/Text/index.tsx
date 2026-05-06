import type { ITextProps } from './types';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text as TextRN } from 'react-native';
import { useTextViewModel } from './hooks';
import { useStyles } from './styles';

export const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { numberOfLines } = props;
  
  const styles = useStyles(props);
  const { content } = useTextViewModel(props);

  return (
    <TextRN style={styles.text} numberOfLines={numberOfLines}>
      {content}
    </TextRN>
  );
};
