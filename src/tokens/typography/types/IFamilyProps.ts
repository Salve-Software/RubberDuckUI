import type { FONT_FAMILIES } from '../constants';

export type FamilyKey = keyof typeof FONT_FAMILIES;

export interface IFamilyProps<K extends FamilyKey = FamilyKey> {
  key: K;
}
