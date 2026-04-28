import { render } from '@testing-library/react-native';
import { Loading } from '../index';

jest.mock('lottie-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  return ({ testID }: { testID?: string }) =>
    React.createElement(View, { testID: testID ?? 'lottie-view' });
});

describe('Loading', () => {
  it('Renders without crashing', () => {
    const { toJSON } = render(<Loading />);
    expect(toJSON()).not.toBeNull();
  });

  it('Renders without crashing with a color prop', () => {
    const { toJSON } = render(<Loading color="accent" />);
    expect(toJSON()).not.toBeNull();
  });

  it('Renders without crashing with a size prop', () => {
    const { toJSON } = render(<Loading size="small_64" />);
    expect(toJSON()).not.toBeNull();
  });
});
