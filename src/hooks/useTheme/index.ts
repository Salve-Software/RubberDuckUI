import { RubberDuckStore } from '../../store';

export const useTheme = () => {
  const colors = RubberDuckStore((state) => state.colors);

  return {
    colors,
  };
};
