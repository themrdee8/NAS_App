import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  textAreaStyle,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.v1}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.v2, otherStyles, textAreaStyle]}>
        <TextInput
          style={styles.txtin}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#F1F1F1"
          secureTextEntry={title === "Password" && !showPassword}
        >
          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  !showPassword
                    ? require("@/assets/images/eye.png")
                    : require("@/assets/images/eye-hide.png")
                }
                resizeMode="contain"
                style={styles.img}
              ></Image>
            </TouchableOpacity>
          )}
        </TextInput>
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  v1: {
    marginTop: 25,
  },
  img: {
    height: 100,
    width: 100,
    tintColor: "#808080",
    marginLeft: 0,
  },
  title: {
    fontSize: 16.5,
    fontWeight: "bold",
    color: "#82D15C",
    paddingVertical: 2,
  },
  v2: {
    width: "93%",
    height: 45,
    backgroundColor: "#5D6F54",
    borderRadius: 10,
    paddingHorizontal: 16,
    borderColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  txtin: {
    flex: 1,
    fontSize: 18,
    fontWeight: "semibold",
    color: "white",
    paddingVertical: 0,
    paddingHorizontal: 0,
  }
});
