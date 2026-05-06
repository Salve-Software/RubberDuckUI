import type { IIconProps } from './types';
import type { LucideIcon } from 'lucide-react-native';
import * as Icons from 'lucide-react-native';
import React from 'react';
import { useRubberDuckStore } from '../../../store';
import { buildSize } from './library';

export const Icon: React.FC<IIconProps> = (props) => {
  const { 
    icon, 
    size, 
    color = "textPrimary", 
    hexColor,
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const iconSize = buildSize(size);
  const IconComponent = Icons[icon] as LucideIcon;
  const resolvedColor = hexColor ?? colors[color];

  return <IconComponent size={iconSize} color={resolvedColor} />;
};

export type { IconName } from './types';
