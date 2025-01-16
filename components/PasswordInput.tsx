import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";

const PasswordInput = ({
  placeholder,
  value,
  handleChangeText,
  title,
}: any) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return (
    <View style={[styles.inputContainer]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#F1F1F1"
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={!isPasswordVisible}
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}
        >
          <Image
            source={
              isPasswordVisible
                ? require("@/assets/images/eye.png")
                : require("@/assets/images/eye-hide.png")
            }
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "93%",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#68C44C",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: "#5D6F54",
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#68C44C",
  },
});
