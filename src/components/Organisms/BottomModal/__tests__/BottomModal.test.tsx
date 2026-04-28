import { Text } from 'react-native';
import { render, screen, act } from '@testing-library/react-native';
import { BottomModal } from '../index';
import { BottomModalApi } from '../controllers';

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    BottomSheetModal: React.forwardRef(({ children }: any, ref: any) => {
      React.useImperativeHandle(ref, () => ({
        present: jest.fn(),
        dismiss: jest.fn(),
      }));
      return React.createElement(View, null, children);
    }),
    BottomSheetBackdrop: () => null,
  };
});

describe('BottomModal', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    BottomModalApi.setRef({ current: null });
  });

  it('Renders without crashing', () => {
    const { toJSON } = render(<BottomModal />);
    expect(toJSON()).not.toBeNull();
  });

  it('Shows content after BottomModalApi.open is called', () => {
    render(<BottomModal />);

    act(() => {
      BottomModalApi.open({
        content: <Text>Modal content</Text>,
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Modal content')).toBeTruthy();
  });

  it('Replaces content when opened a second time', () => {
    render(<BottomModal />);

    act(() => {
      BottomModalApi.open({ content: <Text>First</Text> });
      jest.runAllTimers();
    });

    act(() => {
      BottomModalApi.open({ content: <Text>Second</Text> });
      jest.runAllTimers();
    });

    expect(screen.queryByText('First')).toBeNull();
    expect(screen.getByText('Second')).toBeTruthy();
  });
});
