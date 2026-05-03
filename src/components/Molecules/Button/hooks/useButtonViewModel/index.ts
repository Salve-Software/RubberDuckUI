import type { IButtonProps } from '../../types';
import { useRubberDuckStore } from '../../../../../store';
import { buildSize, buildVariantColors } from '../../library';

export const useButtonViewModel = (props: IButtonProps) => {
  const {
    onPress,
    disabled,
    isLoading,
    variant = 'primary',
    size = 'md',
  } = props;

  const colors = useRubberDuckStore((s) => s.colors);
  const sizes = buildSize(size);
  const variantColors = buildVariantColors(variant, colors);

  function handlePress() {
    if (disabled || isLoading) return;
    onPress();
  }

  return { handlePress, sizes, variantColors };
};
