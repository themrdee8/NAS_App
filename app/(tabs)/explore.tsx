import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { router } from "expo-router";
import PasswordInput from "@/components/PasswordInput";

export default function TabTwoScreen() {
  const login = async () => {
    // try {
    //   const response = await fetch('http://localhost:5000/api/login', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: "username",
    //       password: "password",
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Login failed. Please check your credentials");
    //   }

    //   const data = await response.json();
    //   console.log(data.message);
    //   router.push("/preCare");
    // } catch (error: any) {
    //   console.error(error);
    //   alert(error.message);
    // }
    router.push("/preCare");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.v1}>
        <Text style={styles.titleContainer}>National Ambulance Service</Text>
        <FormField title="Username" placeholder="Username" />
        <PasswordInput title="Password" placeholder="Password" />
      </View>
      <View>
        <Button
          handlePress={login}
          title="Login"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    fontSize: 32,
    color: "white",
    paddingBottom: 35,
  },
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
  },
  v1: {
    alignItems: "center",
    paddingTop: 200,
  },
  button: {
    padding: 0,
    marginTop: 40,
    borderRadius: 8,
    width: 399,
    marginLeft: 14,
  },
  textStyle: {
    padding: 5,
  },
});
