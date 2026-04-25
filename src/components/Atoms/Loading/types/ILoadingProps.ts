import type { IColors } from "../../../../tokens/colors";
import type { LoadingSize } from "./LoadingSize";

export interface ILoadingProps {
  size?: LoadingSize;
  color?: keyof IColors;
}
