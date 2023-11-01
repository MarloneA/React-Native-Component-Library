import { StyleSheet, View } from "react-native";

const PageTemplate = ({ Children }) => {
  return <View style={styles.pageLayout}>{Children}</View>;
};

export const styles = StyleSheet.create({
  pageLayout: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default PageTemplate;
