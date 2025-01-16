import { StyleSheet, Image, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { router } from "expo-router";
import PasswordInput from "@/components/PasswordInput";
import { signIn } from "@/lib/appwrite";
import { useState } from "react";

export default function TabTwoScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      router.replace("/preCare");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.vlogo}>
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
      <View style={styles.v1}>
        <FormField
          title="Email"
          placeholder="me@example.com"
          value={form.email}
          handleChangeText={(e: any) => setForm({ ...form, email: e })}
        />
        <PasswordInput
          title="Password"
          placeholder="Password"
          value={form.password}
          handleChangeText={(e: any) => setForm({ ...form, password: e })}
        />
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
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
  },
  v1: {
    alignItems: "center",
    paddingTop: 20,
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
  logo: {
    width: 135,
    height: 150,
    marginRight: 10,
  },
  vlogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 100,
  },
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
});

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
