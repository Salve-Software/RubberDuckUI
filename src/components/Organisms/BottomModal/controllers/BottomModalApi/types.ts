import type { IBottomModalRefProps } from '../../types';

export interface IBottomModalApi {
  open: (props: IBottomModalRefProps) => void;
  dismiss: () => void;
}
