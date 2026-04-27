import type { IBottomModalRefProps } from '../../types';

export interface IBottomModalApi {
  setProps: (props: IBottomModalRefProps) => void;
  present: () => void;
  dismiss: () => void;
}
