import type { RefObject } from 'react';
import type { IBottomModalApi } from './types';
import type { IBottomModalRefProps } from '../../types';

export class BottomModalApi {
  private static ref: RefObject<IBottomModalApi | null> | null = null;

  static setRef(ref: RefObject<IBottomModalApi | null>) {
    this.ref = ref;
  }

  static setProps = (props: IBottomModalRefProps) =>
    this.ref?.current?.setProps(props);

  static present = () => this.ref?.current?.present();

  static dismiss = () => this.ref?.current?.dismiss();
}
