import type { ReactNode } from "react";
import type { IConfigureStore } from "../../store/types";
import type { StyleProp } from "react-native";
import type { ViewStyle } from "react-native";

export interface IRubberDuckUIProviderProps extends IConfigureStore {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onReady?: () => void;
}