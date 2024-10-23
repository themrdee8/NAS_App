import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormField from "./FormField";

const PersonnelForm = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>
        To Be Completed by Receiving Doctor or Nurse Only
      </Text>
      <View style={styles.v2}>
        <Text style={styles.t2}>Patient Condition (select one)</Text>
        <Text style={styles.t2}>
          - [ ] Red - [ ] Yellow - [ ] Green - [ ] Black
        </Text>
          <FormField title="Receiving Personnel's Name (print name)" otherStyles={styles.others} />
          <FormField title="Patient Handoff Date" otherStyles={styles.others} />
          <FormField title="Time" otherStyles={styles.others} />
          <FormField title="Signature" otherStyles={styles.others} />
      </View>

      <View style={styles.VMain}>
        <Text style={styles.tTitle}>To Be Completed by EMT</Text>
        <View style={styles.v2}>
          <FormField title="EMT 1 Service No." otherStyles={styles.others} />
          <FormField title="Signature" otherStyles={styles.others} />
          <FormField title="Date & Time" otherStyles={styles.others} />
          <FormField title="EMT 2 Service No." otherStyles={styles.others} />
          <FormField title="Signature" otherStyles={styles.others} />
          <FormField
            title="EMT Gave Oral Report To: (Name)"
            otherStyles={styles.others}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonnelForm;

const styles = StyleSheet.create({
  VMain: {
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
  textArea: {
    height: 110,
  },
});
