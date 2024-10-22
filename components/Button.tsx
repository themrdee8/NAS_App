import { NativeWindStyleSheet } from "nativewind";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ handlePress, title, containerStyles, image1, image2 }: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.op, containerStyles]}
    >
      <View style={styles.v1}>
        <Image style={styles.img} source={image2} resizeMode="contain" tintColor="white" />
        <Text style={styles.t1} className=" jus">
          {title}
        </Text>
        <Image style={styles.img} source={image1} resizeMode="contain" tintColor="white" />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  t1: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    padding: 16,
    borderRadius: 8,
  },
  op: {
    backgroundColor: "#8BD268",
    borderRadius: 500,
    alignItems: "center",
  },
  img: {
    height: 30,
    width: 100,
  },
  v1: {
    flexDirection: "row",
    width: 350,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  }
});
