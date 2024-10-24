import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const Tickbox = ({ title, centerItem }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[styles.row, centerItem]}>
      <Checkbox
        style={styles.checkbox}
        color="#68C44C"
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Tickbox;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 5,
  },
  checkbox: {
    margin: 8,
  },
  text: {
    color: "#EAEEE9",
    fontSize: 18,
    fontWeight: "700",
  },
});
