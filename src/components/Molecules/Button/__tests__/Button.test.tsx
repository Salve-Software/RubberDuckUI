import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from '../index';

jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  const mockIcon = (name: string) => (props: object) =>
    React.createElement(View, { testID: `icon-${name}`, ...props });
  return new Proxy({}, { get: (_t: object, name: string) => mockIcon(name) });
});

const baseProps = {
  label: 'Press me',
  onPress: jest.fn(),
};

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Label', () => {
    it('renders the label', () => {
      render(<Button {...baseProps} />);
      expect(screen.getByText('Press me')).toBeTruthy();
    });
  });

  describe('Press behavior', () => {
    it('calls onPress when pressed', () => {
      const onPress = jest.fn();
      render(<Button label="Press me" onPress={onPress} />);
      fireEvent.press(screen.getByText('Press me'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
      const onPress = jest.fn();
      render(<Button label="Press me" onPress={onPress} disabled />);
      fireEvent.press(screen.getByText('Press me'));
      expect(onPress).not.toHaveBeenCalled();
    });

    it('does not call onPress when isLoading', () => {
      const onPress = jest.fn();
      render(<Button label="Press me" onPress={onPress} isLoading testID="btn" />);
      fireEvent.press(screen.getByTestId('btn'));
      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('Loading state', () => {
    it('hides the label when isLoading is true', () => {
      render(<Button {...baseProps} isLoading />);
      expect(screen.queryByText('Press me')).toBeNull();
    });
  });

  describe('Icons', () => {
    it('renders the leftIcon when provided', () => {
      render(<Button {...baseProps} leftIcon="ArrowLeft" />);
      expect(screen.getByTestId('icon-ArrowLeft')).toBeTruthy();
    });

    it('renders the rightIcon when provided', () => {
      render(<Button {...baseProps} rightIcon="ArrowRight" />);
      expect(screen.getByTestId('icon-ArrowRight')).toBeTruthy();
    });
  });
});
