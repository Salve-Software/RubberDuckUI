import type { IPillsGroupProps } from "./types";
import type { IPill } from "./components/Pill/types";
import { View } from "react-native";
import { LegendList, type LegendListRenderItemProps } from "@legendapp/list";
import { useStyles } from "./styles";
import { Pill } from "./components";
import { usePillsGroupViewModel } from "./hooks";

export const PillsGroup: React.FC<IPillsGroupProps> = (props) => {
  const { pills, idSelected, onPress } = props;

  const styles = useStyles();
  const { initialScrollIndex } = usePillsGroupViewModel(props);

  const renderItem = ({ item }: LegendListRenderItemProps<IPill, string | undefined>) => {
    return (
      <Pill
        pill={item}
        isSelected={idSelected === item.id}
        onPress={onPress}
      />
    )
  }

  const itemSeparator = () => {
    return <View style={styles.separator} />
  }

  return (
    <LegendList
      data={pills}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id}
      extraData={idSelected}
      initialScrollIndex={initialScrollIndex && initialScrollIndex > 0 ? initialScrollIndex : undefined}
      showsHorizontalScrollIndicator={false}
      horizontal
      recycleItems
    />
  )
}

export type { IPill } from './components';
