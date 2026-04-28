import { render, screen } from '@testing-library/react-native';
import { ModalList } from '../index';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');
  const BottomSheetFlatList = ({ data, renderItem, ListHeaderComponent }: any) => {
    const separators = { highlight: jest.fn(), unhighlight: jest.fn(), updateProps: jest.fn() };
    const header = ListHeaderComponent
      ? React.createElement(ListHeaderComponent)
      : null;
    const rows = (data ?? []).map((item: any, index: number) =>
      renderItem?.({ item, index, separators }),
    );
    return React.createElement(View, null, header, ...rows);
  };
  return { BottomSheetFlatList };
});

jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  const mockIcon = (name: string) => (props: object) =>
    React.createElement(View, { testID: `icon-${name}`, ...props });
  return new Proxy({}, { get: (_t: object, name: string) => mockIcon(name) });
});

const items = [
  {
    id: '1',
    type: 'icon' as const,
    title: 'Edit',
    iconName: 'Pencil' as const,
    onPress: jest.fn(),
  },
  {
    id: '2',
    type: 'icon' as const,
    title: 'Delete',
    iconName: 'Trash' as const,
    onPress: jest.fn(),
  },
];

describe('ModalList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Header', () => {
    it('Renders the title', () => {
      render(<ModalList title="Options" items={[]} />);
      expect(screen.getByText('Options')).toBeTruthy();
    });
  });

  describe('Items', () => {
    it('Renders each item title', () => {
      render(<ModalList title="Options" items={items} />);

      expect(screen.getByText('Edit')).toBeTruthy();
      expect(screen.getByText('Delete')).toBeTruthy();
    });

    it('Renders no items when the list is empty', () => {
      render(<ModalList title="Options" items={[]} />);

      expect(screen.queryByText('Edit')).toBeNull();
    });
  });
});
