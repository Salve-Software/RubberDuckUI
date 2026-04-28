import type { IBottomListModalRefProps } from '../../types';
import { BottomModalApi } from '../../../BottomModal/controllers';
import { ModalList } from '../../components';

export class BottomListModalApi {
  static open = (props: IBottomListModalRefProps) => {
    BottomModalApi.open({
      content: (
        <ModalList
          title={props.title}
          items={props.items}
        />
      ),
    });
  };

  static dismiss = () => BottomModalApi.dismiss();
}
