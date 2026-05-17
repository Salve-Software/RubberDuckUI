import { render, screen, fireEvent } from '@testing-library/react-native';
import { PillsGroup } from '../index';

jest.mock('@legendapp/list', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    LegendList: ({ data, renderItem, extraData }: any) =>
      React.createElement(
        View,
        null,
        data.map((item: any, index: number) =>
          React.cloneElement(renderItem({ item, index, data, extraData }), { key: item.id ?? index }),
        ),
      ),
  };
});

const pills = [
  { id: '1', title: 'Todos' },
  { id: '2', title: 'Pendentes' },
  { id: '3', title: 'Aprovados' },
];

describe('PillsGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Render', () => {
    it('Renders all pill titles', () => {
      render(
        <PillsGroup pills={pills} idSelected="1" onPress={jest.fn()} />,
      );
      expect(screen.getByText('Todos')).toBeTruthy();
      expect(screen.getByText('Pendentes')).toBeTruthy();
      expect(screen.getByText('Aprovados')).toBeTruthy();
    });

    it('Renders without crashing with an empty list', () => {
      const { toJSON } = render(
        <PillsGroup pills={[]} idSelected="" onPress={jest.fn()} />,
      );
      expect(toJSON()).not.toBeNull();
    });
  });

  describe('Press behavior', () => {
    it('Calls onPress with the id of the pressed pill', () => {
      const onPress = jest.fn();
      render(<PillsGroup pills={pills} idSelected="1" onPress={onPress} />);

      fireEvent.press(screen.getByText('Pendentes'));

      expect(onPress).toHaveBeenCalledWith('2');
    });
  });
});
