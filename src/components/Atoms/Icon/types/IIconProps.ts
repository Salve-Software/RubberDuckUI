import type { IconName } from "./IconName";
import type { IColors } from "../../../../tokens/colors";
import type { IconSize } from "./IconSize";

export type IIconProps = {
  icon: IconName;
  size?: IconSize;
  color?: keyof IColors;
};
