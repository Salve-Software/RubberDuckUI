import { render, screen } from '@testing-library/react-native';
import { Avatar } from '../index';

jest.mock('react-content-loader/native', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(View, null, children),
    Circle: () => null,
  };
});

describe('Avatar', () => {
  describe('Letter variant', () => {
    it('Renders the first letter of a single-word title', () => {
      render(<Avatar title="Ana" />);
      expect(screen.getByText('A')).toBeTruthy();
    });

    it('Renders initials for a two-word title', () => {
      render(<Avatar title="John Doe" />);
      expect(screen.getByText('JD')).toBeTruthy();
    });
  });

  describe('Image variant', () => {
    it('Renders without crashing when a source is provided', () => {
      const { toJSON } = render(
        <Avatar source={{ uri: 'https://example.com/avatar.png' }} />,
      );
      expect(toJSON()).not.toBeNull();
    });

    it('Renders without crashing when no props are provided', () => {
      const { toJSON } = render(<Avatar />);
      expect(toJSON()).not.toBeNull();
    });
  });
});
