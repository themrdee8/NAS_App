import Button from "@/components/Button";
import ClinicInfo from "@/components/ClinicInfo";
import Dispatch from "@/components/DispatchInfo";
import FormField from "@/components/FormField";
import PatientInfo from "@/components/PatientInfo";
import PersonnelForm from "@/components/PersonnelForm";
import PhysicalAndHandoff from "@/components/PhysicalAndHandoff";
import Triage from "@/components/Triage";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const preCare = () => {
  return (
    <ScrollView style={styles.Container}>
      <View>
        <Text style={styles.t1}>Pre Hospital Care Report</Text>
      </View>
      <View style={styles.v2}>
        <FormField title="Ambulance Station" otherStyles={styles.others} />
        <FormField title="Shift Code" otherStyles={styles.others} />
        <FormField title="Region" otherStyles={styles.others} />
      </View>

      <Dispatch />

      <PatientInfo />

      <ClinicInfo />

      <Triage />

      <PhysicalAndHandoff />

      <PersonnelForm />

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
  }
});
