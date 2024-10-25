import Button from "@/components/Button";
import ClinicalImpression from "@/components/ClinicImpression";
import Equipment from "@/components/Equipment";
import FormField from "@/components/FormField";
import Patient from "@/components/Patient";
import Tickbox from "@/components/Tickbox";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const preBilling = () => {
  return (
    <ScrollView style={styles.Container}>
      <View>
        <Text style={styles.t1}>Pre Billing and Coding</Text>
      </View>
      <View style={styles.v2}>
        <FormField title="Dispatch Date" otherStyles={styles.others} />
        <FormField title="TIme Left Base" otherStyles={styles.others} />
        <FormField title="Abulance Station No." otherStyles={styles.others} />
        <FormField title="Patient First Name" otherStyles={styles.others} />
        <FormField title="Patient Last Name" otherStyles={styles.others} />
      </View>

      <Text style={styles.t2}>Sex</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Male" />
        <Tickbox title="Female" />
      </View>

      <View style={styles.v2}>
        <FormField title="Age/Date of Birth" otherStyles={styles.others} />
      </View>

      <Text style={styles.t2}>Insurance</Text>
      <View style={styles.vCheck}>
        <Tickbox title="NHIS" />
      </View>
        

      <View style={styles.v2}>
        <FormField
          title={<Tickbox title="Other (specify)" centerItem={styles.center} />}
          otherStyles={styles.others}
        />
      </View>

      <View style={styles.v2}>
        <FormField title="Insurance Company" otherStyles={styles.others} />
      </View>

      <View style={styles.v2}>
        <FormField title="EMT Completing this Form" otherStyles={styles.others} />
        <FormField title="EMT Name" otherStyles={styles.others} />
        <FormField title="Signature" otherStyles={styles.others} />
        <FormField title="Date&Time" otherStyles={styles.others} />
      </View>

      <ClinicalImpression />

      <Patient />

      <Equipment />

      <View style={styles.bView}>
        <Button
          title="Submit Form"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
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
