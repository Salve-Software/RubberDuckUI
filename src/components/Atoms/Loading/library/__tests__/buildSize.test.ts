import type { LoadingSize } from "../../types";
import { buildSize } from "../buildSize";

describe("Loading/buildSize", () => {
  it("Returns correct sizes for small_64", () => {
    const result = buildSize("small_64" as LoadingSize);
    expect(result).toEqual({
      lottie: 80,
      wrapper: 40,
    });
  });

  it("Returns correct sizes for big_150", () => {
    const result = buildSize("big_150" as LoadingSize);
    expect(result).toEqual({
      lottie: 150,
      wrapper: 80,
    });
  });

  it("Returns undefined for unknown size", () => {
    const result = buildSize("unknown_size" as LoadingSize);
    expect(result).toEqual({
      lottie: 80,
      wrapper: 40,
    });
  });
});
