import type { IBottomListModalRefProps } from '../../types';

export interface IBottomListModalApi {
  open: (props: IBottomListModalRefProps) => void;
  dismiss: () => void;
}
