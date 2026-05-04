import type { IToasterRefProps } from '../../types';

export interface IToasterApi {
  show: (props: IToasterRefProps) => void;
  hide: () => void;
}
