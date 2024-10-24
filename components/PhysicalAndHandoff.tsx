import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const PhysicalAndHandoff = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Physical Exams and Vital Signs</Text>
      <Text style={styles.t2}>Vital Signs (first record)</Text>
      <View style={styles.v2}>
        <FormField title="BP" otherStyles={styles.others} />
        <FormField title="Pulse Rate" otherStyles={styles.others} />
        <FormField title="Resp. Rate" otherStyles={styles.others} />
        <FormField title="SpO2" otherStyles={styles.others} />
        <FormField title="Temp. (°C)" otherStyles={styles.others} />
        <FormField title="Time" otherStyles={styles.others} />
        <FormField
          title="Additional Interventions"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
        />
      </View>

      <View style={styles.VMain}>
        <Text style={styles.tTitle}>Secondary Assessment / Interventions</Text>
        <View style={styles.v2}>
          <FormField
            title="Field Diagnosis / Observations (details of chief complaint)"
            otherStyles={styles.others}
            textAreaStyle={styles.textArea}
          />
        </View>
      </View>

      <View style={styles.VMain}>
        <Text style={styles.tTitle}>Patient Handoff</Text>
        <Text style={styles.t2}>Vital Signs (first record)</Text>
        <View style={styles.vCheck}>
          <Tickbox title="Improved" />
          <Tickbox title="Unchanged" />
          <Tickbox title="Deteriorated" />
          <Tickbox title="Died En Route" />
        </View>

        <View style={styles.v2}>
          <FormField
            title="Receiving Facility Name"
            otherStyles={styles.others}
          />
          <FormField title="Receiving Department" otherStyles={styles.others} />
          <FormField
            title="Receiving Doctor or Nurse (print name)"
            otherStyles={styles.others}
          />
          <FormField title="Signature" otherStyles={styles.others} />
          <FormField title="Date & Time" otherStyles={styles.others} />
        </View>
      </View>
    </View>
  );
};

export default PhysicalAndHandoff;

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
