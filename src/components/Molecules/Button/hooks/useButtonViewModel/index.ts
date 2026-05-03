import type { IButtonProps } from '../../types';

export const useButtonViewModel = (props: IButtonProps) => {
  const { onPress, disabled, isLoading } = props;

  function handlePress() {
    if (disabled || isLoading) return;
    onPress();
  }

  return { handlePress };
};
