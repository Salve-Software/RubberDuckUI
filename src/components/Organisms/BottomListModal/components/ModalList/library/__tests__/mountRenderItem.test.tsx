import type { IModalListItem } from '../../../../types';
import type { ListRenderItemInfo } from 'react-native';
import { BottomModalApi } from '../../../../../BottomModal/controllers';
import { mountRenderItem } from '../mountRenderItem';

const styles = { itemWrapper: {}, selectableItemWrapper: {}, textWrapper: {} };

const separators: ListRenderItemInfo<IModalListItem>['separators'] = {
  highlight: jest.fn(),
  unhighlight: jest.fn(),
  updateProps: jest.fn(),
};

const callRenderItem = (item: IModalListItem) =>
  mountRenderItem({ styles })({ item, index: 0, separators });

describe('BottomListModal/ModalList/mountRenderItem', () => {
  let dismissSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    dismissSpy = jest.spyOn(BottomModalApi, 'dismiss').mockImplementation(() => undefined);
  });

  afterEach(() => {
    dismissSpy.mockRestore();
  });

  describe('Press behavior', () => {
    it('Fires item.onPress when the row is pressed', () => {
      const onPress = jest.fn();
      const element = callRenderItem({
        id: '1', type: 'icon', title: 'Edit', iconName: 'Pencil', onPress,
      });

      (element as any).props.onPress();

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('Dismisses the modal when keepOpen is not set', () => {
      const element = callRenderItem({
        id: '1', type: 'icon', title: 'Edit', iconName: 'Pencil', onPress: jest.fn(),
      });

      (element as any).props.onPress();

      expect(dismissSpy).toHaveBeenCalledTimes(1);
    });

    it('Dismisses the modal when keepOpen is false', () => {
      const element = callRenderItem({
        id: '1', type: 'checkbox', title: 'Active', isChecked: false, keepOpen: false, onPress: jest.fn(),
      });

      (element as any).props.children.props.onPress();

      expect(dismissSpy).toHaveBeenCalledTimes(1);
    });

    it('Does not dismiss the modal when keepOpen is true', () => {
      const onPress = jest.fn();
      const element = callRenderItem({
        id: '1', type: 'checkbox', title: 'Active', isChecked: false, keepOpen: true, onPress,
      });

      (element as any).props.children.props.onPress();

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(dismissSpy).not.toHaveBeenCalled();
    });
  });

  describe('Item types', () => {
    it('Returns null when an icon item is missing iconName', () => {
      const result = callRenderItem({
        id: '1', type: 'icon', title: 'Edit', onPress: jest.fn(),
      });

      expect(result).toBeNull();
    });

    it('Returns null for an unknown item type', () => {
      const result = callRenderItem({
        id: '1', type: 'unknown' as IModalListItem['type'], title: 'X', onPress: jest.fn(),
      });

      expect(result).toBeNull();
    });

    it('Returns an element with an onPress handler for the checkbox variant', () => {
      const element = callRenderItem({
        id: '1', type: 'checkbox', title: 'Active', isChecked: true, onPress: jest.fn(),
      });

      expect(element).not.toBeNull();
      expect(typeof (element as any).props.children.props.onPress).toBe('function');
    });

    it('Returns an element with an onPress handler for the radio variant', () => {
      const element = callRenderItem({
        id: '1', type: 'radio', title: 'Newest', isChecked: true, onPress: jest.fn(),
      });

      expect(element).not.toBeNull();
      expect(typeof (element as any).props.children.props.onPress).toBe('function');
    });

    it('Returns an element with an onPress handler for the avatar variant', () => {
      const element = callRenderItem({
        id: '1', type: 'avatar', title: 'Ana', onPress: jest.fn(),
      });

      expect(element).not.toBeNull();
      expect(typeof (element as any).props.onPress).toBe('function');
    });

    it('Returns an element with an onPress handler for the icon variant', () => {
      const element = callRenderItem({
        id: '1', type: 'icon', title: 'Edit', iconName: 'Pencil', onPress: jest.fn(),
      });

      expect(element).not.toBeNull();
      expect(typeof (element as any).props.onPress).toBe('function');
    });
  });
});
