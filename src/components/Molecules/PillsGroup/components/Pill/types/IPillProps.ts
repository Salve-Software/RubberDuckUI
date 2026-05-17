import type { IPill } from "./IPill";

export interface IPillProps {
  pill: IPill;
  isSelected: boolean;
  onPress: (id: string) => void;
}
