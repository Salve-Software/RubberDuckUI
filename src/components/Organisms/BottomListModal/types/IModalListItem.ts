import type { IconName } from '../../../Atoms/Icon/types';
import type { ImageSourcePropType } from 'react-native';

export type ModalListItemType = 'checkbox' | 'radio' | 'avatar' | 'icon';

export interface IModalListItem {
  id: string;
  title: string;
  subTitle?: string;
  type: ModalListItemType;
  onPress: () => void;
  isChecked?: boolean;
  isDanger?: boolean;
  keepOpen?: boolean;
  iconName?: IconName;
  avatarSource?: ImageSourcePropType;
}
