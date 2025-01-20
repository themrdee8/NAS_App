import { View, Text } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";
import { sharedStyles } from "@/sharedStyles";

const PersonnelForm = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.VMain}>
      <Text style={sharedStyles.tTitle}>
        To Be Completed by Receiving Doctor or Nurse Only
      </Text>
      <Text style={sharedStyles.t2b}>Patient Condition (select one)</Text>
      <View style={sharedStyles.vCheck}>
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

      <View style={sharedStyles.v2}>
        <FormField
          title="Receiving Personnel's Name (print name)"
          otherStyles={sharedStyles.others}
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
          otherStyles={sharedStyles.others}
        />
        <DateTimeInput
          title="Time"
          mode="time"
          value={updateForm.patientHandoffTime}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, patientHandoffTime: e })
          }
          placeholder="Select a date and time"
          otherStyles={sharedStyles.others}
        />
        <FormField
          title="Signature"
          otherStyles={sharedStyles.others}
          value={updateForm.receivingPersonnelSignature}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, receivingPersonnelSignature: e })
          }
        />
      </View>

      <View style={sharedStyles.VMain}>
        <Text style={sharedStyles.tTitle}>To Be Completed by EMT</Text>
        <View style={sharedStyles.v2}>
          <FormField
            title="EMT 1 Service No."
            otherStyles={sharedStyles.others}
            value={updateForm.emt1ServiceNumber}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt1ServiceNumber: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={sharedStyles.others}
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
            otherStyles={sharedStyles.others}
          />
          <FormField
            title="EMT 2 Service No."
            otherStyles={sharedStyles.others}
            value={updateForm.emt2bServiceNumber}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt2bServiceNumber: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={sharedStyles.others}
            value={updateForm.emt2bSignature}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, emt2bSignature: e })
            }
          />
          <FormField
            title="EMT Gave Oral Report To: (Name)"
            otherStyles={sharedStyles.others}
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
