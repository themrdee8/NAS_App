import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function HomeScreen() {
  const login = () => {
    router.push("/explore")
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.v1}>
        <Text style={styles.titleContainer} className=" items-center">
          National Ambulance Service
        </Text>
      </View>
      <View style={styles.v2}>
        <Text style={styles.t1}>Welcome to NAS APP</Text>
        <Text style={styles.t2}>
          Your digital companion for emergency services
        </Text>
        {/* <Button title="Signup" containerStyles={styles.signup} /> */}
        <Button
          title="Login"
          containerStyles={styles.login}
          image1={require("@/assets/images/arrowUp.png")}
          image2={require("@/assets/images/mic.png")}
          handlePress={login}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 32,
    color: "white",
  },
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
  },
  v1: {
    alignItems: "center",
    paddingTop: 200,
  },
  v2: {
    paddingTop: 50,
    alignItems: "center",
  },
  t1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 40,
  },
  t2: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1CC274",
    textAlign: "center",
  },
  login: {
    marginTop: 50,
  },
});
