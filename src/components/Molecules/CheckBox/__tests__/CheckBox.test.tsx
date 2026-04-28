import { render, screen, fireEvent } from '@testing-library/react-native';
import { CheckBox } from '../index';

jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  const mockIcon = (name: string) => (props: object) =>
    React.createElement(View, { testID: `icon-${name}`, ...props });
  return new Proxy({}, { get: (_t: object, name: string) => mockIcon(name) });
});

const baseProps = {
  onPress: jest.fn(),
};

describe('CheckBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<CheckBox {...baseProps} title="Accept terms" />);
      expect(screen.getByText('Accept terms')).toBeTruthy();
    });

    it('Does not render a title when omitted', () => {
      render(<CheckBox {...baseProps} />);
      expect(screen.queryByText('Accept terms')).toBeNull();
    });
  });

  describe('SubTitle', () => {
    it('Renders the subtitle when provided', () => {
      render(<CheckBox {...baseProps} subTitle="Read the docs first" />);
      expect(screen.getByText('Read the docs first')).toBeTruthy();
    });
  });

  describe('Press behavior', () => {
    it('Calls onPress when pressed', () => {
      const onPress = jest.fn();
      render(<CheckBox onPress={onPress} title="Item" />);

      fireEvent.press(screen.getByText('Item'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Checked state', () => {
    it('Renders without crashing when isChecked is true', () => {
      const { toJSON } = render(<CheckBox {...baseProps} isChecked />);
      expect(toJSON()).not.toBeNull();
    });

    it('Renders without crashing when isChecked is false', () => {
      const { toJSON } = render(
        <CheckBox {...baseProps} isChecked={false} />,
      );
      expect(toJSON()).not.toBeNull();
    });
  });
});
