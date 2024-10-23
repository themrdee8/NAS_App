import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";

const PatientInfo = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Patient Information</Text>
      <View style={styles.v2}>
        <FormField title="Patient Name" otherStyles={styles.others} />
        <FormField title="Age" otherStyles={styles.others} />
        <Text style={styles.t2}>Gender</Text>
        <Text style={styles.t2}>- [ ] Male - [ ] Female</Text>
        <FormField title="Address" otherStyles={styles.others} />
        <FormField title="Telephone" otherStyles={styles.others} />
        <FormField title="ID No./Passport No." otherStyles={styles.others} />
        <Text style={styles.t2}>Contact Person</Text>
        <FormField title="Name" otherStyles={styles.others} />
        <FormField title="Telephone" otherStyles={styles.others} />

        <View style={styles.v2}>
          <Text style={styles.t2}>Relationship</Text>
          <Text style={styles.t2}>
            - [ ] Father / Mother - [ ] Spouse - [ ] Other
          </Text>
        </View>

        <View style={styles.v2}>
          <Text style={styles.t2}>Patient Refused Treatment</Text>
          <Text style={styles.t2}>- [ ] Yes - [ ] No</Text>
        </View>
      </View>

      
      
    </View>
  );
};

export default PatientInfo;

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
});
