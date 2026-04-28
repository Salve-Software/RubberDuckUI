import type { IconSize } from "../types";

export const buildSize = (size: IconSize = "tiny_20") => {
  switch (size) {
    case "small_16":
      return 16;

    case "tiny_20":
      return 20;

    case "medium_26":
      return 26;

    case "big_32":
      return 32;

    case "large_40":
      return 40;

    case "gigant_104":
      return 104;
  }
};
