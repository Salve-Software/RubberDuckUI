import type { ICheckBoxProps } from "../../types";

export const useCheckBoxViewModel = (props: ICheckBoxProps) => {
  const { onPress } = props

  function onCheck() {
    onPress();
  }

  return {
    onCheck,
  };
};
