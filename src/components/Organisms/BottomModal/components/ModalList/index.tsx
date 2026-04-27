import React, { useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import type { ListRenderItem } from 'react-native';
import { Text } from '../../../../Atoms/Text';
import { Icon } from '../../../../Atoms/Icon';
import { useStyles } from './styles';
import type { IModalListProps } from './types';
import type { IModalListItem } from '../../types';
import { mountRenderItem } from './library';

export const ModalList: React.FC<IModalListProps> = ({
  items,
  emptyState,
  setOnHideCallback,
  onClose,
}) => {
  const styles = useStyles();

  const renderItem: ListRenderItem<IModalListItem> = mountRenderItem({
    styles,
    setOnHideCallback,
    onClose,
  });

  const renderItemSeparator = useCallback(
    () => <View style={styles.itemSeparator} />,
    [styles.itemSeparator]
  );

  if (items.length === 0) {
    return (
      <View style={styles.emptyWrapper}>
        <Text color="textSecondary" align="center">
          {emptyState?.message ?? 'No items'}
        </Text>
        {emptyState?.iconName
          ?
          <Icon
            icon={emptyState.iconName}
            size="big_32"
            color="textSecondary"
          />
          : null
        }
      </View>
    );
  }

  return (
    <BottomSheetFlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      contentContainerStyle={styles.flatlistContent}
    />
  );
};
