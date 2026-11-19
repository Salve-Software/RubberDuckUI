import type { IFontFamilies } from './IFontFamilies';

export type FamilyKey = keyof IFontFamilies;

export interface IFamilyProps<K extends FamilyKey = FamilyKey> {
  key: K;
}
