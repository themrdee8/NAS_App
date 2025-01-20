import Button from "@/components/Button";
import ClinicalImpression from "@/components/ClinicImpression";
import Equipment from "@/components/Equipment";
import FormField from "@/components/FormField";
import Patient from "@/components/Patient";
import { createPreBillingForm, signOut } from "@/lib/appwrite";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { PreBillingCode } from "@/constants/formFields";
import DateTimeInput from "@/components/DateTimeField";
import SexTickbox from "@/components/SexTickbox";
import InsuranceTickbox from "@/components/InsuranceTickbox";
import { sharedStyles } from "@/sharedStyles";

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
    <ScrollView style={sharedStyles.Container}>
      <View>
        <Text style={sharedStyles.t1}>Pre Billing and Coding</Text>
      </View>
      <View style={sharedStyles.v2}>
        <DateTimeInput
          title="Dispatch Date"
          mode="date"
          value={form.dispatchDate}
          handleChange={(e: any) => setForm({ ...form, dispatchDate: e })}
          placeholder="Select a date and time"
          otherStyles={sharedStyles.others}
        />
        <DateTimeInput
          title="Time Left Base"
          mode="time"
          value={form.timeLeftBase}
          handleChange={(e: any) => setForm({ ...form, timeLeftBase: e })}
          placeholder="Select a date and time"
          otherStyles={sharedStyles.others}
        />
        <FormField
          title="Abulance Station No."
          otherStyles={sharedStyles.others}
          value={form.ambulanceStationNumber}
          handleChangeText={(e: any) =>
            setForm({ ...form, ambulanceStationNumber: e })
          }
        />
        <FormField
          title="Patient First Name"
          otherStyles={sharedStyles.others}
          value={form.patientFirstName}
          handleChangeText={(e: any) =>
            setForm({ ...form, patientFirstName: e })
          }
        />
        <FormField
          title="Patient Last Name"
          otherStyles={sharedStyles.others}
          value={form.patientLastName}
          handleChangeText={(e: any) =>
            setForm({ ...form, patientLastName: e })
          }
        />
      </View>

      <SexTickbox updateForm={form} updateSetForm={setForm} />

      <View style={sharedStyles.v2}>
        <FormField
          title="Age/Date of Birth"
          otherStyles={sharedStyles.others}
          value={form.ageDateOfBirth}
          handleChangeText={(e: any) => setForm({ ...form, ageDateOfBirth: e })}
        />
      </View>

      <InsuranceTickbox updateForm={form} updateSetForm={setForm} />

      <View style={sharedStyles.v2}>
        <FormField
          title="Insurance Company"
          otherStyles={sharedStyles.others}
          value={form.insuranceCompany}
          handleChangeText={(e: any) =>
            setForm({ ...form, insuranceCompany: e })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title="EMT Completing this Form"
          otherStyles={sharedStyles.others}
          value={form.emtCompletingThisForm}
          handleChangeText={(e: any) =>
            setForm({ ...form, emtCompletingThisForm: e })
          }
        />
        <FormField
          title="EMT Name"
          otherStyles={sharedStyles.others}
          value={form.emtName}
          handleChangeText={(e: any) => setForm({ ...form, emtName: e })}
        />
        <FormField
          title="Signature"
          otherStyles={sharedStyles.others}
          value={form.emtSignature}
          handleChangeText={(e: any) => setForm({ ...form, emtSignature: e })}
        />
        <DateTimeInput
          title="Date & Time"
          mode="datetime"
          value={form.emtDateTime}
          handleChange={(e: any) => setForm({ ...form, emtDateTime: e })}
          placeholder="Select a date and time"
          otherStyles={sharedStyles.others}
        />
      </View>

      <ClinicalImpression updateForm={form} updateSetForm={setForm} />

      <Patient updateForm={form} updateSetForm={setForm} />

      <Equipment updateForm={form} updateSetForm={setForm} />

      <View style={sharedStyles.bView}>
        <Button
          title="Submit Form"
          containerStyles={sharedStyles.button}
          textStyles={sharedStyles.textStyle}
          handlePress={submit}
        />
      </View>
    </ScrollView>
  );
};

export default preBilling;
