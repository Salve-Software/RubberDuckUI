import type { IPill } from "../components/Pill/types";

export interface IPillsGroupProps {
  pills: IPill[];
  idSelected: string;
  onPress: (id: string) => void;
}
