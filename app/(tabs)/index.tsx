import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function HomeScreen() {
  const login = () => {
    router.push("/explore");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.v1}>
        <Image
          source={require("@/assets/images/nas-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleContainer}>National</Text>
          <Text style={styles.titleContainer}>Ambulance</Text>
          <Text style={styles.titleContainer}>Service</Text>
        </View>
      </View>
      <View style={styles.v2}>
        <Text style={styles.t1}>Welcome to NAS APP</Text>
        <Text style={styles.t2}>
          Your digital companion for emergency services
        </Text>
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
    fontSize: 30.5,
    color: "#68C44C",
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 100,
  },
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
  },
  v1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 100,
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
  logo: {
    width: 135,
    height: 150,
    marginRight: 10,
  },
});
