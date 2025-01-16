import Button from "@/components/Button";
import ClinicalImpression from "@/components/ClinicImpression";
import Equipment from "@/components/Equipment";
import FormField from "@/components/FormField";
import Patient from "@/components/Patient";
import { createPreBillingForm, signOut } from "@/lib/appwrite";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { PreBillingCode } from "@/constants/formFields";
import DateTimeInput from "@/components/DateTimeField";
import SexTickbox from "@/components/SexTickbox";
import InsuranceTickbox from "@/components/InsuranceTickbox";

const preBilling = () => {
  const [form, setForm] = useState(PreBillingCode);

  const [uploading, setUploading] = useState(false);

  const submit = async () => {
    if (!form) {
      return Alert.alert("Please fill all required fields");
    }

    setUploading(true);

    try {
      await createPreBillingForm({
        ...form,
      });

      Alert.alert("Success", "Form submitted successfully!");
      signOut();
      router.push("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setForm(PreBillingCode);

      setUploading(false);
    }
  };

  return (
    <ScrollView style={styles.Container}>
      <View>
        <Text style={styles.t1}>Pre Billing and Coding</Text>
      </View>
      <View style={styles.v2}>
        <DateTimeInput
          title="Dispatch Date"
          mode="date"
          value={form.dispatchDate}
          handleChange={(e: any) => setForm({ ...form, dispatchDate: e })}
          placeholder="Select a date and time"
          otherStyles={styles.others}
        />
        <DateTimeInput
          title="Time Left Base"
          mode="time"
          value={form.timeLeftBase}
          handleChange={(e: any) => setForm({ ...form, timeLeftBase: e })}
          placeholder="Select a date and time"
          otherStyles={styles.others}
        />
        <FormField
          title="Abulance Station No."
          otherStyles={styles.others}
          value={form.ambulanceStationNumber}
          handleChangeText={(e: any) =>
            setForm({ ...form, ambulanceStationNumber: e })
          }
        />
        <FormField
          title="Patient First Name"
          otherStyles={styles.others}
          value={form.patientFirstName}
          handleChangeText={(e: any) =>
            setForm({ ...form, patientFirstName: e })
          }
        />
        <FormField
          title="Patient Last Name"
          otherStyles={styles.others}
          value={form.patientLastName}
          handleChangeText={(e: any) =>
            setForm({ ...form, patientLastName: e })
          }
        />
      </View>

      <SexTickbox updateForm={form} updateSetForm={setForm} />

      <View style={styles.v2}>
        <FormField
          title="Age/Date of Birth"
          otherStyles={styles.others}
          value={form.ageDateOfBirth}
          handleChangeText={(e: any) => setForm({ ...form, ageDateOfBirth: e })}
        />
      </View>

      <InsuranceTickbox updateForm={form} updateSetForm={setForm} />

      <View style={styles.v2}>
        <FormField
          title="Insurance Company"
          otherStyles={styles.others}
          value={form.insuranceCompany}
          handleChangeText={(e: any) =>
            setForm({ ...form, insuranceCompany: e })
          }
        />
      </View>

      <View style={styles.v2}>
        <FormField
          title="EMT Completing this Form"
          otherStyles={styles.others}
          value={form.emtCompletingThisForm}
          handleChangeText={(e: any) =>
            setForm({ ...form, emtCompletingThisForm: e })
          }
        />
        <FormField
          title="EMT Name"
          otherStyles={styles.others}
          value={form.emtName}
          handleChangeText={(e: any) => setForm({ ...form, emtName: e })}
        />
        <FormField
          title="Signature"
          otherStyles={styles.others}
          value={form.emtSignature}
          handleChangeText={(e: any) => setForm({ ...form, emtSignature: e })}
        />
        <DateTimeInput
          title="Date & Time"
          mode="datetime"
          value={form.emtDateTime}
          handleChange={(e: any) => setForm({ ...form, emtDateTime: e })}
          placeholder="Select a date and time"
          otherStyles={styles.others}
        />
      </View>

      <ClinicalImpression updateForm={form} updateSetForm={setForm} />

      <Patient updateForm={form} updateSetForm={setForm} />

      <Equipment updateForm={form} updateSetForm={setForm} />

      <View style={styles.bView}>
        <Button
          title="Submit Form"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
          handlePress={submit}
        />
      </View>
    </ScrollView>
  );
};

export default preBilling;

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
    marginTop: 15,
  },
  vCheck: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
    flexWrap: "wrap",
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
  center: {
    width: "100%",
    marginRight: 20,
  },
});
