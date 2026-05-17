import { render, screen, fireEvent } from '@testing-library/react-native';
import { Pill } from '../index';

const pill = { id: '42', title: 'Aprovados' };

describe('Pill', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Render', () => {
    it('Renders the pill title', () => {
      render(<Pill pill={pill} isSelected={false} onPress={jest.fn()} />);
      expect(screen.getByText('Aprovados')).toBeTruthy();
    });

    it('Renders without crashing when selected', () => {
      const { toJSON } = render(
        <Pill pill={pill} isSelected={true} onPress={jest.fn()} />,
      );
      expect(toJSON()).not.toBeNull();
    });

    it('Renders without crashing when not selected', () => {
      const { toJSON } = render(
        <Pill pill={pill} isSelected={false} onPress={jest.fn()} />,
      );
      expect(toJSON()).not.toBeNull();
    });
  });

  describe('Press behavior', () => {
    it('Calls onPress with the pill id when pressed', () => {
      const onPress = jest.fn();
      render(<Pill pill={pill} isSelected={false} onPress={onPress} />);

      fireEvent.press(screen.getByText('Aprovados'));

      expect(onPress).toHaveBeenCalledWith('42');
    });

    it('Calls onPress every time the pill is pressed', () => {
      const onPress = jest.fn();
      render(<Pill pill={pill} isSelected={false} onPress={onPress} />);

      fireEvent.press(screen.getByText('Aprovados'));
      fireEvent.press(screen.getByText('Aprovados'));

      expect(onPress).toHaveBeenCalledTimes(2);
    });
  });
});
