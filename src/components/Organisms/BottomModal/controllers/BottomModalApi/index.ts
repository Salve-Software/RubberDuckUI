import type { RefObject } from 'react';
import type { IBottomModalApi } from './types';
import type { IBottomModalRefProps } from '../../types';

export class BottomModalApi {
  private static ref: RefObject<IBottomModalApi | null> | null = null;

  static setRef(ref: RefObject<IBottomModalApi | null>) {
    if (this.ref !== null && __DEV__) {
      console.warn('[BottomModalApi] setRef called while a ref is already registered. Only one BottomModal instance should be mounted at a time.');
    }
    this.ref = ref;
  }

  static open = (props: IBottomModalRefProps) =>
    this.ref?.current?.open(props);

  static dismiss = () => this.ref?.current?.dismiss();
}
