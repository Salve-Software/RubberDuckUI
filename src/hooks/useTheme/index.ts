import { useRubberDuckStore } from '../../store';

export const useTheme = () => {
  const colors = useRubberDuckStore((state) => state.colors);

  return {
    colors,
  };
};
