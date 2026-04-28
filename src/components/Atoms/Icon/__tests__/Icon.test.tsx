import { render, screen } from '@testing-library/react-native';
import { Icon } from '../index';

jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  const mockIcon = (name: string) => (props: object) =>
    React.createElement(View, { testID: `icon-${name}`, ...props });
  return new Proxy({}, { get: (_t: object, name: string) => mockIcon(name) });
});

describe('Icon', () => {
  it('Renders the requested icon', () => {
    render(<Icon icon="Pencil" />);
    expect(screen.getByTestId('icon-Pencil')).toBeTruthy();
  });

  it('Renders without crashing with size and color props', () => {
    const { toJSON } = render(
      <Icon icon="Check" size="small_16" color="accent" />,
    );
    expect(toJSON()).not.toBeNull();
  });

  it('Renders without crashing when color is omitted', () => {
    const { toJSON } = render(<Icon icon="X" />);
    expect(toJSON()).not.toBeNull();
  });
});
