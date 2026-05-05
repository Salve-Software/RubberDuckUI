import type { IconSize } from '../../../Atoms/Icon/types';
import type { LoadingSize } from '../../../Atoms/Loading/types';
import type { FONT_SIZES } from '../../../../tokens/typography';
import type { ButtonSize } from '../types';
import { Tokens } from '../../../../tokens/Tokens.class';

export type ButtonSizeConfig = {
  height: number;
  paddingHorizontal: number;
  fontSize: keyof typeof FONT_SIZES;
  iconSize: IconSize;
  loadingSize: LoadingSize;
};

export const buildSize = (size: ButtonSize): ButtonSizeConfig => {
  switch (size) {
    case 'sm':
      return {
        height: 36,
        paddingHorizontal: Tokens.spacer({ key: 'sm' }),
        fontSize: 'xs',
        iconSize: 'small_16',
        loadingSize: 'tiny_48',
      };

    case 'md':
      return {
        height: 44,
        paddingHorizontal: Tokens.spacer({ key: 'md' }),
        fontSize: 'sm',
        iconSize: 'tiny_20',
        loadingSize: 'small_64',
      };

    case 'lg':
    default:
      return {
        height: 52,
        paddingHorizontal: Tokens.spacer({ key: 'lg' }),
        fontSize: 'md',
        iconSize: 'tiny_20',
        loadingSize: 'small_64',
      };
  }
};
