import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";

const PhysicalAndHandoff = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Physical Exams and Vital Signs</Text>
      <Text style={styles.t2}>Vital Signs (first record)</Text>
      <View style={styles.v2}>
        <FormField
          title="BP"
          otherStyles={styles.others}
          value={updateForm.bp}
          handleChangeText={(e: any) => updateSetForm({ ...updateForm, bp: e })}
        />
        <FormField
          title="Pulse Rate"
          otherStyles={styles.others}
          value={updateForm.pulseRate}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, pulseRate: e })
          }
        />
        <FormField
          title="Resp. Rate"
          otherStyles={styles.others}
          value={updateForm.respRate}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, respRate: e })
          }
        />
        <FormField
          title="SpO2"
          otherStyles={styles.others}
          value={updateForm.spO2}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, spO2: e })
          }
        />
        <FormField
          title="Temp. (°C)"
          otherStyles={styles.others}
          value={updateForm.temp}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, temp: e })
          }
        />
        <DateTimeInput
          title="Time"
          mode="time"
          value={updateForm.vitalSignsTime}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, vitalSignsTime: e })
          }
          placeholder="Select a time"
          otherStyles={styles.others}
        />
        <FormField
          title="Additional Interventions"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
          value={updateForm.additionalInterventions}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, additionalInterventions: e })
          }
        />
      </View>

      <View style={styles.VMain}>
        <Text style={styles.tTitle}>Secondary Assessment / Interventions</Text>
        <View style={styles.v2}>
          <FormField
            title="Field Diagnosis / Observations (details of chief complaint)"
            otherStyles={styles.others}
            textAreaStyle={styles.textArea}
            value={updateForm.fieldDiagnosisObservations}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, fieldDiagnosisObservations: e })
            }
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
            value={updateForm.receivingFacility}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingFacility: e })
            }
          />
          <FormField
            title="Receiving Department"
            otherStyles={styles.others}
            value={updateForm.receivingDepartment}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingDepartment: e })
            }
          />
          <FormField
            title="Receiving Doctor or Nurse (print name)"
            otherStyles={styles.others}
            value={updateForm.receivingDoctorOrNurse}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingDoctorOrNurse: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={styles.others}
            value={updateForm.signature}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, signature: e })
            }
          />
          <DateTimeInput
            title="Date & Time"
            mode="datetime"
            value={updateForm.dateAndTime}
            handleChange={(e: any) =>
              updateSetForm({ ...updateForm, dateAndTime: e })
            }
            placeholder="Select a date and time"
            otherStyles={styles.others}
          />
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
