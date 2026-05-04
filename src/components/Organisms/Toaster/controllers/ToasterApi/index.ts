import type { RefObject } from 'react';
import type { IToasterApi } from './types';
import type { IToasterRefProps } from '../../types';

export class ToasterApi {
  private static ref: RefObject<IToasterApi | null> | null = null;

  static setRef(ref: RefObject<IToasterApi | null>) {
    this.ref = ref;
  }

  static show = (props: IToasterRefProps) =>
    this.ref?.current?.show(props);

  static hide = () => {
    this.ref?.current?.hide();
  };
}
