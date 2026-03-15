import type { ILoadingProps } from "./types";
import { StyleSheet } from "react-native";
import { buildSize } from "./library";

export const useStyles = (props: ILoadingProps) => {
  const { size = 'small_64' } = props;

  const sizes = buildSize(size);

  return StyleSheet.create({
    lottieWrapper: {
      height: sizes.wrapper,
      width: sizes.wrapper,
      alignItems: 'center',
      justifyContent: 'center'
    },

    lottie: {
      height: sizes.lottie,
      width: sizes.lottie
    }
  });
};
