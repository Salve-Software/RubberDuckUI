import { render, screen } from '@testing-library/react-native';
import { Text } from '../index';

describe('Text', () => {
  it('Renders its children', () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText('Hello world')).toBeTruthy();
  });

  it('Applies numberOfLines prop', () => {
    render(<Text numberOfLines={2}>Long text</Text>);
    expect(screen.getByText('Long text').props.numberOfLines).toBe(2);
  });

  it('Renders without crashing when no props are provided', () => {
    const { toJSON } = render(<Text>content</Text>);
    expect(toJSON()).not.toBeNull();
  });
});
