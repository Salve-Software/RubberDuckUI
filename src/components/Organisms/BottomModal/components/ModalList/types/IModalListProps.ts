import type { IModalListItem, IEmptyStateProps } from '../../../types';

export interface IModalListProps {
  items: IModalListItem[];
  emptyState?: IEmptyStateProps;
  setOnHideCallback: (cb: () => void) => void;
  onClose: () => void;
}
