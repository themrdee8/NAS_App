import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";

const ClinicInfo = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Clinical Information</Text>
      <View style={styles.v2}>
        <FormField
          title="Chief Complaint or Reason for Transport"
          otherStyles={styles.others}
        />
        <FormField
          title="Description of Problem"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
        />

        <View style={styles.v2}>
          <Text style={styles.t2}>Body Part Involved(selet one)</Text>
          <Text style={styles.t2}>
            - [ ] Head / Neck - [ ] Thorax - [ ] Lower Abdomen - [ ] Lower
            Extremities - [ ] Upper Abdomen - [ ] Upper Extremities - [ ]
            Reproductive / Tract - [ ] Other
          </Text>
        </View>

        <FormField title="Recent Medical History" otherStyles={styles.others} />
        <FormField title="Recent Medications" otherStyles={styles.others} />

        <View style={styles.v2}>
          <Text style={styles.t2}>Source of Information(select one)</Text>
          <Text style={styles.t2}>
            -- [ ] Patient - [ ] Relative / Friend - [ ] Nurse - [ ] Doctor - [
            ] Bystander - [ ] Other
          </Text>
        </View>

        <View style={styles.v2}>
          <Text style={styles.t2}>Type of Trauma</Text>
          <Text style={styles.t2}>
            - [ ] RTC (Road Traffic Collision) - [ ] Industrial Accident - [ ]
            Other - [ ] Trauma - [ ] Mental Disorder
          </Text>
        </View>
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
