import type { LoadingSize } from "../types";

export const buildSize = (size: LoadingSize) => {
  switch (size) {
    case "tiny_48":
      return {
        lottie: 70,
        wrapper: 28,
      };

    case "small_64":
      return {
        lottie: 80,
        wrapper: 40,
      };

    case "big_150":
      return {
        lottie: 150,
        wrapper: 80,
      };

    default:
      return {
        lottie: 80,
        wrapper: 40,
      };
  }
};
