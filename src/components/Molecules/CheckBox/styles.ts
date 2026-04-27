import type { ICheckBoxProps } from "./types";
import { StyleSheet } from "react-native";
import { useRubberDuckStore } from "../../../store";
import { Tokens } from "../../../tokens/Tokens.class";

export const useStyles = (props: ICheckBoxProps) => {
  const { isChecked } = props;
  
  const colors = useRubberDuckStore((s) => s.colors);

  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    outerCheckbox: {
      borderWidth: 2,
      borderColor: isChecked ? colors.accent : colors.borderDefault,
      width: 22,
      height: 22,
      borderRadius: Tokens.radii({ key: 'xs' }),
    },

    innerCheckbox: {
      backgroundColor: colors.background,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    titles: {
      justifyContent: 'center',
      marginLeft: Tokens.spacer({ key: 'xs' }),
    },
  });
};
