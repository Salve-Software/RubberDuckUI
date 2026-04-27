import { TouchableOpacity, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { CheckBox } from '../../../../../Molecules/CheckBox';
import { RadioButton } from '../../../../../Molecules/RadioButton';
import { Avatar } from '../../../../../Molecules/Avatar';
import { Icon } from '../../../../../Atoms/Icon';
import { Text } from '../../../../../Atoms/Text';
import type { IModalListItem } from '../../../types';

interface IMountRenderItemParams {
  styles: {
    itemWrapper: object;
    textWrapper: object;
  };
  setOnHideCallback: (cb: () => void) => void;
  onClose: () => void;
}

export const mountRenderItem = ({ styles, setOnHideCallback, onClose }: IMountRenderItemParams): ListRenderItem<IModalListItem> => {
  return ({ item }) => {
    const onPressItem = () => {
      if (item.keepOpen) {
        item.onPress();
      } else {
        setOnHideCallback(() => item.onPress());
        onClose();
      }
    };

    switch (item.type) {
      case 'checkbox':
        return (
          <TouchableOpacity onPress={onPressItem}>
            <CheckBox
              title={item.title}
              subTitle={item.subTitle}
              isChecked={item.isChecked}
              onPress={onPressItem}
            />
          </TouchableOpacity>
        );

      case 'radio':
        return (
          <TouchableOpacity onPress={onPressItem}>
            <RadioButton
              title={item.title}
              subTitle={item.subTitle}
              isChecked={item.isChecked}
              onPress={onPressItem}
            />
          </TouchableOpacity>
        );

      case 'avatar':
        return (
          <TouchableOpacity style={styles.itemWrapper} onPress={onPressItem}>
            <Avatar source={item.avatarSource} size="small_32" />
            <View style={styles.textWrapper}>
              <Text>{item.title}</Text>
              {item.subTitle ? <Text size="sm" color="textSecondary">{item.subTitle}</Text> : null}
            </View>
          </TouchableOpacity>
        );

      case 'icon':
        return (
          <TouchableOpacity style={styles.itemWrapper} onPress={onPressItem}>
            <Icon
              icon={item.iconName!}
              size="tiny_20"
              color={item.isDanger ? 'error' : 'textPrimary'}
            />
            <Text color={item.isDanger ? 'error' : 'textPrimary'}>{item.title}</Text>
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };
};
