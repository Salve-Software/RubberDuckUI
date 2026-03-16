import type { ImageSource } from "react-native";
import type { AvatarSize } from "./AvatarSize";
import type { IColors } from "../../../../tokens/colors";

export type IAvatarProps = {
  title?: string;
  source?: ImageSource;
  size?: AvatarSize;
  borderColor?: keyof IColors;
}