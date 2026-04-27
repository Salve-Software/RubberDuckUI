import type { IModalListItem } from './IModalListItem';
import type { IEmptyStateProps } from './IEmptyStateProps';

export interface IBottomModalRefProps {
  title: string;
  items: IModalListItem[];
  emptyState?: IEmptyStateProps;
}
