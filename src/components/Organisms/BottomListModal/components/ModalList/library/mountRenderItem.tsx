import type { ListRenderItem } from 'react-native';
import type { IModalListItem } from '../../../types';
import { TouchableOpacity, View } from 'react-native';
import { CheckBox } from '../../../../../Molecules/CheckBox';
import { RadioButton } from '../../../../../Molecules/RadioButton';
import { Avatar } from '../../../../../Molecules/Avatar';
import { Icon } from '../../../../../Atoms/Icon';
import { Text } from '../../../../../Atoms/Text';
import { BottomModalApi } from '../../../../BottomModal/controllers';

interface IMountRenderItemParams {
  styles: {
    itemWrapper: object;
    textWrapper: object;
  };
}

export const mountRenderItem = (params: IMountRenderItemParams): ListRenderItem<IModalListItem> => {
  const { styles } = params;

  return ({ item }) => {
    const onPressItem = () => {
      item.onPress();

      if (!item.keepOpen) {
        BottomModalApi.dismiss();
      }
    };

    switch (item.type) {
      case 'checkbox':
        return (
          <CheckBox
            title={item.title}
            subTitle={item.subTitle}
            isChecked={item.isChecked}
            onPress={onPressItem}
          />
        );

      case 'radio':
        return (
          <RadioButton
            title={item.title}
            subTitle={item.subTitle}
            isChecked={item.isChecked}
            onPress={onPressItem}
          />
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
        if (!item.iconName) { return null; }
        return (
          <TouchableOpacity style={styles.itemWrapper} onPress={onPressItem}>
            <Icon
              icon={item.iconName}
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
