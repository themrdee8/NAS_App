import Button from "@/components/Button";
import ClinicInfo from "@/components/ClinicInfo";
import Dispatch from "@/components/DispatchInfo";
import FormField from "@/components/FormField";
import PatientInfo from "@/components/PatientInfo";
import PersonnelForm from "@/components/PersonnelForm";
import PhysicalAndHandoff from "@/components/PhysicalAndHandoff";
import Triage from "@/components/Triage";
import { createPreHospitalCare } from "@/lib/appwrite";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {PreHospitalCare} from "@/constants/formFields"

const preCare = () => {
  const [form, setForm] = useState(PreHospitalCare);

  const [uploading, setUploading] = useState(false);

  const billing = async () => {
    if (!form.ambulanceStation || !form.shiftCode || !form.region) {
      return Alert.alert("Please fill all required fields");
    }

    setUploading(true);

    try {
      await createPreHospitalCare({
        ...form,
      });

      Alert.alert("Success", "Form uploaded");
      router.push("/preBilling");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setForm(PreHospitalCare);

      setUploading(false);
    }
  };

  return (
    <ScrollView style={styles.Container}>
      <View>
        <Text style={styles.t1}>Pre Hospital Care Report</Text>
      </View>
      <View style={styles.v2}>
        <FormField
          title="Ambulance Station"
          otherStyles={styles.others}
          value={form.ambulanceStation}
          handleChangeText={(e: any) =>
            setForm({ ...form, ambulanceStation: e })
          }
        />
        <FormField
          title="Shift Code"
          otherStyles={styles.others}
          value={form.shiftCode}
          handleChangeText={(e: any) => setForm({ ...form, shiftCode: e })}
        />
        <FormField
          title="Region"
          otherStyles={styles.others}
          value={form.region}
          handleChangeText={(e: any) => setForm({ ...form, region: e })}
        />
      </View>

      <Dispatch upadteForm={form} updateSetForm={setForm} />

      <PatientInfo upadteForm={form} updateSetForm={setForm} />

      <ClinicInfo upadteForm={form} updateSetForm={setForm} />

      <Triage upadteForm={form} updateSetForm={setForm} />

      <PhysicalAndHandoff upadteForm={form} updateSetForm={setForm} />

      <PersonnelForm upadteForm={form} updateSetForm={setForm} />

      <View style={styles.bView}>
        <Button
          title="Next"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
          handlePress={billing}
        />
      </View>
    </ScrollView>
  );
};

export default preCare;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
    paddingTop: 25,
  },
  t1: {
    fontSize: 25,
    fontWeight: "700",
    color: "#68C44C",
    textAlign: "center",
    textTransform: "uppercase",
  },
  others: {
    borderColor: "#68C44C",
  },
  v2: {
    alignItems: "center",
    paddingBottom: 30,
  },
  t2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#68C44C",
    marginLeft: 18,
  },
  tTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#68C44C",
    marginLeft: 18,
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
  bView: {
    paddingBottom: 80,
  },
});
