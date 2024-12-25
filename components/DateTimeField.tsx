import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimeInput = ({
  title,
  mode = "date", // default to "date", but can be "time" or "datetime"
  value,
  handleChange,
  placeholder,
  otherStyles,
}: any) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date: Date) => {
    handleChange(date); // Pass selected date back to parent
    hidePicker();
  };

  // Format the default placeholder or value
  const formatDateTime = (date: Date) => {
    const formattedDate = date.toLocaleDateString([], {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }); // e.g., "25 Dec 2024"
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // e.g., "9:48 PM"
    return `${formattedDate}, ${formattedTime}`; // Add a comma instead of "at"
  };

  const defaultPlaceholder = formatDateTime(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={showPicker}
        style={[styles.input, otherStyles]}
      >
        <Text style={styles.inputText}>
          {value ? formatDateTime(value) : defaultPlaceholder}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
};

export default DateTimeInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#82D15C",
    marginBottom: 5,
  },
  input: {
    width: "93%",
    height: 45,
    backgroundColor: "#5D6F54",
    borderRadius: 10,
    marginRight: 5,
    paddingLeft: 15,
    paddingRight: 214,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  inputText: {
    color: "white",
    fontSize: 16,
  },
});
