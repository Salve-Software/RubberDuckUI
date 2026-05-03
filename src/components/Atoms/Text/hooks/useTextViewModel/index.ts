import type { ITextProps } from '../../types';
import type { PropsWithChildren, ReactNode } from 'react';
import React, { useMemo } from 'react';
import { Text as TextRN } from 'react-native';
import { useStyles } from '../../styles';
import { parseInlineBold } from '../../library';

export const useTextViewModel = (props: PropsWithChildren<ITextProps>) => {
  const { children } = props;

  const styles = useStyles(props);

  const content = useMemo((): ReactNode => {
    if (typeof children !== 'string' || !children.includes('**')) return children as ReactNode;
    
    return parseInlineBold(children).map(({ text, bold, key }) =>
      React.createElement(TextRN, { key, style: bold ? styles.boldText : undefined }, text)
    );
  }, [children, styles.boldText]);

  return {
    content,
    textStyle: styles.text,
  };
};
