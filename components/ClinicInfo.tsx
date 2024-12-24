import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const ClinicInfo = ({ upadteForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Clinical Information</Text>
      <View style={styles.v2}>
        <FormField
          title="Chief Complaint or Reason for Transport"
          otherStyles={styles.others}
          value={upadteForm.chiefComplaint}
          handleChangeText={(e: any) =>
            updateSetForm({ ...upadteForm, chiefComplaint: e })
          }
        />
        <FormField
          title="Description of Problem"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
          value={upadteForm.descriptionOfProblem}
          handleChangeText={(e: any) =>
            updateSetForm({ ...upadteForm, descriptionOfProblem: e })
          }
        />
      </View>

      <Text style={styles.t2}>Body Part Involved(selet one)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Head/Neck" />
        <Tickbox title="Thorax" />
        <Tickbox title="Lower Abdomen" />
        <Tickbox title="Lower Extremities" />
        <Tickbox title="Upper Abdomen" />
        <Tickbox title="Upper Extremities" />
        <Tickbox title="Reproductive/Tract" />
        <Tickbox title="Other" />
      </View>

      <View style={styles.v2}>
        <FormField
          title="Recent Medical History"
          otherStyles={styles.others}
          value={upadteForm.recentMedicalHistory}
          handleChangeText={(e: any) =>
            updateSetForm({ ...upadteForm, recentMedicalHistory: e })
          }
        />
        <FormField
          title="Recent Medications"
          otherStyles={styles.others}
          value={upadteForm.recentMedications}
          handleChangeText={(e: any) =>
            updateSetForm({ ...upadteForm, recentMedications: e })
          }
        />
      </View>

      <Text style={styles.t2}>Source of Information(select one)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Patient" />
        <Tickbox title="Relative/Friend" />
        <Tickbox title="Nurse" />
        <Tickbox title="Doctor" />
        <Tickbox title="Bystander" />
        <Tickbox title="Other" />
      </View>

      <Text style={styles.t2}>Type of Trauma</Text>
      <View style={styles.vCheck}>
        <Tickbox title="RTC(Road Traffic Collision)" />
        <Tickbox title="Industrial Accident" />
        <Tickbox title="Other" />
        <Tickbox title="Trauma" />
        <Tickbox title="Mental Disorder" />
      </View>
    </View>
  );
};

export default ClinicInfo;

const styles = StyleSheet.create({
  VMain: {
    paddingVertical: 25,
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
  textArea: {
    height: 110,
  },
});
