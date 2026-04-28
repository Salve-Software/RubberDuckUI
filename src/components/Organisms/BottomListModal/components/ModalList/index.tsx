import type { IModalListProps } from './types';
import type { IModalListItem } from '../../types';
import type { ListRenderItem } from 'react-native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Text } from '../../../../Atoms/Text';
import { useStyles } from './styles';
import { mountRenderItem } from './library';

export const ModalList: React.FC<IModalListProps> = (props) => {
  const { title, items } = props;

  const styles = useStyles();

  const renderItem: ListRenderItem<IModalListItem> = mountRenderItem({ styles });

  const renderItemSeparator = useCallback(() => {
    return (
      <View style={styles.itemSeparator} />
    )
  }, [styles.itemSeparator]);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <Text weight="semibold" size="xl">{title}</Text>
      </View>
    )
  }, [styles.header, title]);

  return (
    <BottomSheetFlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      ListHeaderComponent={renderHeader}
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.listContent}
    />
  );
};
