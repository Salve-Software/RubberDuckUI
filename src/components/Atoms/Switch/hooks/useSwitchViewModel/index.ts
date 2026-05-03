import type { ISwitchProps } from '../../types';

export const useSwitchViewModel = (props: ISwitchProps) => {
  const { onPress, disabled } = props;

  function onToggle() {
    if (!disabled) {
      onPress();
    }
  }

  return {
    onToggle,
  };
};
