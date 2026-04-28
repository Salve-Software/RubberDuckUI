jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    BottomSheetFlatList: ({ children }: any) =>
      React.createElement(View, null, children),
  };
});

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

jest.mock('../../../../BottomModal/controllers', () => ({
  BottomModalApi: {
    open: jest.fn(),
    dismiss: jest.fn(),
  },
}));

import { BottomListModalApi } from '../index';
import { BottomModalApi } from '../../../../BottomModal/controllers';

const items = [
  { id: '1', type: 'icon' as const, title: 'Edit', iconName: 'Pencil' as const, onPress: jest.fn() },
];

describe('BottomListModalApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('open', () => {
    it('Delegates to BottomModalApi.open', () => {
      BottomListModalApi.open({ title: 'Options', items });

      expect(BottomModalApi.open).toHaveBeenCalledTimes(1);
    });

    it('Passes a content element with the correct title prop', () => {
      BottomListModalApi.open({ title: 'Settings', items });

      const { content } = (BottomModalApi.open as jest.Mock).mock.calls[0][0];
      expect(content.props.title).toBe('Settings');
    });

    it('Passes a content element with the correct items prop', () => {
      BottomListModalApi.open({ title: 'Options', items });

      const { content } = (BottomModalApi.open as jest.Mock).mock.calls[0][0];
      expect(content.props.items).toBe(items);
    });
  });

  describe('dismiss', () => {
    it('Delegates to BottomModalApi.dismiss', () => {
      BottomListModalApi.dismiss();

      expect(BottomModalApi.dismiss).toHaveBeenCalledTimes(1);
    });
  });
});
