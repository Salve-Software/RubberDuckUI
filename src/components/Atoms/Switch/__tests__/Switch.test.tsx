import { render, screen, fireEvent } from '@testing-library/react-native';
import { Switch } from '../index';

const baseProps = {
  onPress: jest.fn(),
};

describe('Switch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('Renders correctly when isOn is true', () => {
      const { toJSON } = render(<Switch {...baseProps} isOn />);
      expect(toJSON()).not.toBeNull();
    });

    it('Renders correctly when isOn is false', () => {
      const { toJSON } = render(<Switch {...baseProps} isOn={false} />);
      expect(toJSON()).not.toBeNull();
    });
  });

  describe('Press behavior', () => {
    it('Calls onPress when pressed', () => {
      const onPress = jest.fn();
      render(<Switch onPress={onPress} />);

      fireEvent.press(screen.getByRole('switch'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('Does NOT call onPress when disabled is true', () => {
      const onPress = jest.fn();
      render(<Switch onPress={onPress} disabled />);

      fireEvent.press(screen.getByRole('switch'));

      expect(onPress).not.toHaveBeenCalled();
    });
  });
});
