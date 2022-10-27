import { View, StyleSheet } from "react-native";
import { myColors } from "../../../utils/colors/myColors";

type ContainerComponentProps = {
  children: React.ReactNode;
};
export default function ContainerComponent(props: ContainerComponentProps) {
  return <View style={styles.container}>{props.children}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: myColors.green,
  },
});
