import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";

const Tickbox = ({ title, centerItem, value, handleChange }: any) => {
  const [isChecked, setIsChecked] = useState(value || false);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleLocalChange = (newValue: boolean) => {
    setIsChecked(newValue);
    handleChange(newValue);
  }

  return (
    <View style={[styles.row, centerItem]}>
      <Checkbox
        style={styles.checkbox}
        color="#68C44C"
        value={isChecked}
        onValueChange={handleLocalChange}
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
