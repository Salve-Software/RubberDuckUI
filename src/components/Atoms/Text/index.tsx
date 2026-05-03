import type { ITextProps } from './types';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text as TextRN } from 'react-native';
import { useStyles } from './styles';
import { parseInlineBold } from './library';

export const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { children, numberOfLines } = props;

  const styles = useStyles(props);

  const content = typeof children === 'string' && children.includes('**')
    ? parseInlineBold(children).map(({ text, bold, key }) =>
      <TextRN key={key} style={bold ? styles.boldText : undefined}>
        {text}
      </TextRN>
    )
    : children;

  return (
    <TextRN style={styles.text} numberOfLines={numberOfLines}>
      {content}
    </TextRN>
  );
};
