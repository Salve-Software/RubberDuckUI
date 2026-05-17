import type { IPillsGroupProps } from '../../types';

export const usePillsGroupViewModel = (props: IPillsGroupProps) => {
  const { pills, idSelected } = props;

  const selectedIndex = pills.findIndex((pill) => pill.id === idSelected);
  const initialScrollIndex = selectedIndex > 0 ? selectedIndex : undefined;

  return { initialScrollIndex };
};
