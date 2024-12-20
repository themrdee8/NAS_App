import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const PersonnelForm = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>
        To Be Completed by Receiving Doctor or Nurse Only
      </Text>
      <Text style={styles.t2}>Patient Condition (select one)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Red" />
        <Tickbox title="Yellow" />
        <Tickbox title="Green" />
        <Tickbox title="Black" />
      </View>

      <View style={styles.v2}>
        <FormField
          title="Receiving Personnel's Name (print name)"
          otherStyles={styles.others}
        />
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
