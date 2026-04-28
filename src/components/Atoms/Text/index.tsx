import type { ITextProps } from './types';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text as TextRN } from 'react-native';
import { useStyles } from './styles';

export const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { children, numberOfLines } = props;

  const styles = useStyles(props);
  
  return (
    <TextRN style={styles.text} numberOfLines={numberOfLines}>
      {children}
    </TextRN>
  );
};
