import { render, screen, act } from '@testing-library/react-native';
import { Toaster } from '../index';
import { ToasterApi } from '../controllers';

describe('Toaster', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    ToasterApi.setRef({ current: null });
  });

  it('Renders without crashing', () => {
    const { toJSON } = render(<Toaster />);
    expect(toJSON()).toBeNull();
  });

  it('Shows title after ToasterApi.show is called', () => {
    render(<Toaster />);

    act(() => {
      ToasterApi.show({ type: 'success', title: 'Hello World' });
    });

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('Shows both title and description when description is provided', () => {
    render(<Toaster />);

    act(() => {
      ToasterApi.show({
        type: 'info',
        title: 'Info Title',
        description: 'Info Description',
      });
    });

    expect(screen.getByText('Info Title')).toBeTruthy();
    expect(screen.getByText('Info Description')).toBeTruthy();
  });

  it('Replaces content when show is called twice', () => {
    render(<Toaster />);

    act(() => {
      ToasterApi.show({ type: 'success', title: 'First' });
    });

    act(() => {
      ToasterApi.show({ type: 'error', title: 'Second' });
    });

    expect(screen.queryByText('First')).toBeNull();
    expect(screen.getByText('Second')).toBeTruthy();
  });

  it('ToasterApi.hide does not throw', () => {
    render(<Toaster />);

    expect(() => {
      act(() => {
        ToasterApi.hide();
      });
    }).not.toThrow();
  });
});
