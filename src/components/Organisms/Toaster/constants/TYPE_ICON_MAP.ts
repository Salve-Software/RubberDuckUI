import type { ToasterType } from '../types';
import type { IconName } from '../../../Atoms/Icon/types/IconName';

export const TYPE_ICON_MAP: Record<ToasterType, IconName> = {
  success: 'CircleCheck',
  error: 'CircleX',
  warning: 'TriangleAlert',
  info: 'CircleAlert',
};
