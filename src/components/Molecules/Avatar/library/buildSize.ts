import type { AvatarSize } from '../types';

export const buildSize = (size: AvatarSize): number => {
  switch (size) {
    case 'tiny_24':
      return 24;

    case 'small_32':
      return 32;

    case 'medium_40':
      return 40;

    case 'big_48':
      return 48;

    case 'gigant_68':
      return 68;
  }
};
