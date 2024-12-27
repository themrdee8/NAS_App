import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";

const PersonnelForm = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>
        To Be Completed by Receiving Doctor or Nurse Only
      </Text>
      <Text style={styles.t2}>Patient Condition (select one)</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Red"
          value={updateForm.docOnlyPatientCondition === "red"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              docOnlyPatientCondition: isChecked ? "red" : null,
            })
          }
        />
        <Tickbox
          title="Yellow"
          value={updateForm.docOnlyPatientCondition === "yellow"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              docOnlyPatientCondition: isChecked ? "yellow" : null,
            })
          }
        />
        <Tickbox
          title="Green"
          value={updateForm.docOnlyPatientCondition === "green"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              docOnlyPatientCondition: isChecked ? "green" : null,
            })
          }
        />
        <Tickbox
          title="Black"
          value={updateForm.docOnlyPatientCondition === "black"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              docOnlyPatientCondition: isChecked ? "black" : null,
            })
          }
        />
      </View>

      <View style={styles.v2}>
        <FormField
          title="Receiving Personnel's Name (print name)"
          otherStyles={styles.others}
          value={updateForm.receivingPersonnelName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, receivingPersonnelName: e })
          }
        />
        <DateTimeInput
          title="Patient Handoff Date"
          mode="date"
          value={updateForm.patientHandoffDate}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, patientHandoffDate: e })
          }
          placeholder="Select a date and time"
          otherStyles={styles.others}
        />
        <DateTimeInput
          title="Time"
          mode="time"
          value={updateForm.patientHandoffTime}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, patientHandoffTime: e })
          }
          placeholder="Select a date and time"
          otherStyles={styles.others}
        />
        <FormField
          title="Signature"
          otherStyles={styles.others}
          value={updateForm.receivingPersonnelSignature}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, receivingPersonnelSignature: e })
          }
        />
      </View>

      <View style={styles.VMain}>
        <Text style={styles.tTitle}>To Be Completed by EMT</Text>
        <View style={styles.v2}>
          <FormField
            title="EMT 1 Service No."
            otherStyles={styles.others}
            value={updateForm.emt1ServiceNumber}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt1ServiceNumber: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={styles.others}
            value={updateForm.emt1Signature}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt1Signature: e })
            }
          />
          <DateTimeInput
            title="Date & Time"
            mode="datetime"
            value={updateForm.emtDateTime}
            handleChange={(e: any) =>
              updateSetForm({ ...updateForm, emtDateTime: e })
            }
            placeholder="Select a date and time"
            otherStyles={styles.others}
          />
          <FormField
            title="EMT 2 Service No."
            otherStyles={styles.others}
            value={updateForm.emt2ServiceNumber}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt2ServiceNumber: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={styles.others}
            value={updateForm.emt2Signature}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt2Signature: e })
            }
          />
          <FormField
            title="EMT Gave Oral Report To: (Name)"
            otherStyles={styles.others}
            value={updateForm.emtGaveOralReportToName}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emtGaveOralReportToName: e })
            }
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
