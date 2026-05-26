import type { IPillProps } from "./types";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../../Atoms";
import { useStyles } from "./styles";
import { useReanimatedStyles, usePillViewModel } from "./hooks";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const Pill: React.FC<IPillProps> = (props) => {
  const { isSelected } = props;

  const { textColor, title, onPress } = usePillViewModel(props);

  const styles = useStyles();
  const reanimatedStyles = useReanimatedStyles({ isSelected });

  return (
    <AnimatedTouchable
      style={[styles.wrapper, reanimatedStyles.wrapper]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        color={textColor}
        size='md'>
        {title}
      </Text>
    </AnimatedTouchable>
  )
}

export type { IPill } from './types';
