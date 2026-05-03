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

  describe('Inline bold', () => {
    it('Renders plain text without bold segments', () => {
      render(<Text>Hello world</Text>);
      expect(screen.getByText('Hello world')).toBeTruthy();
    });

    it('Renders bold segment with bold style', () => {
      render(<Text>{'I agree to the **Terms & Privacy Policy**'}</Text>);
      expect(screen.getByText('Terms & Privacy Policy')).toBeTruthy();
    });

    it('Renders plain segments alongside bold segments', () => {
      render(<Text>{'I agree to the **Terms & Privacy Policy**'}</Text>);
      expect(screen.getByText('I agree to the ')).toBeTruthy();
      expect(screen.getByText('Terms & Privacy Policy')).toBeTruthy();
    });

    it('Renders non-string children as-is', () => {
      render(<Text>{42}</Text>);
      expect(screen.getByText('42')).toBeTruthy();
    });
  });
});
