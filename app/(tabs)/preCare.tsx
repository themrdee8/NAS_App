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
import { Alert, ScrollView, Text, View } from "react-native";
import { PreHospitalCare } from "@/constants/formFields";
import { sharedStyles } from "@/sharedStyles";

const preCare = () => {
  const [form, setForm] = useState(PreHospitalCare);

  const [uploading, setUploading] = useState(false);

  const billing = async () => {
    if (!form) {
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
    <ScrollView style={sharedStyles.Container}>
      <View>
        <Text style={sharedStyles.t1}>Pre Hospital Care Report</Text>
      </View>
      <View style={sharedStyles.v2}>
        <FormField
          title="Ambulance Station"
          otherStyles={sharedStyles.others}
          value={form.ambulanceStation}
          handleChangeText={(e: any) =>
            setForm({ ...form, ambulanceStation: e })
          }
        />
        <FormField
          title="Shift Code"
          otherStyles={sharedStyles.others}
          value={form.shiftCode}
          handleChangeText={(e: any) => setForm({ ...form, shiftCode: e })}
        />
        <FormField
          title="Region"
          otherStyles={sharedStyles.others}
          value={form.region}
          handleChangeText={(e: any) => setForm({ ...form, region: e })}
        />
      </View>

      <Dispatch updateForm={form} updateSetForm={setForm} />

      <PatientInfo updateForm={form} updateSetForm={setForm} />

      <ClinicInfo updateForm={form} updateSetForm={setForm} />

      <Triage updateForm={form} updateSetForm={setForm} />

      <PhysicalAndHandoff updateForm={form} updateSetForm={setForm} />

      <PersonnelForm updateForm={form} updateSetForm={setForm} />

      <View style={sharedStyles.bView}>
        <Button
          title="Next"
          containerStyles={sharedStyles.button}
          textStyles={sharedStyles.textStyle}
          handlePress={billing}
        />
      </View>
    </ScrollView>
  );
};

export default preCare;
