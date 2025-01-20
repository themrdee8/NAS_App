import { View, Text } from "react-native";
import React from "react";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";
import { sharedStyles } from "@/sharedStyles";

const PhysicalAndHandoff = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.VMain}>
      <Text style={sharedStyles.tTitle}>Physical Exams and Vital Signs</Text>
      <Text style={sharedStyles.t2b}>Vital Signs (first record)</Text>
      <View style={sharedStyles.v2}>
        <FormField
          title="BP"
          otherStyles={sharedStyles.others}
          value={updateForm.bp}
          handleChangeText={(e: any) => updateSetForm({ ...updateForm, bp: e })}
        />
        <FormField
          title="Pulse Rate"
          otherStyles={sharedStyles.others}
          value={updateForm.pulseRate}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, pulseRate: e })
          }
        />
        <FormField
          title="Resp. Rate"
          otherStyles={sharedStyles.others}
          value={updateForm.respRate}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, respRate: e })
          }
        />
        <FormField
          title="SpO2"
          otherStyles={sharedStyles.others}
          value={updateForm.spO2}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, spO2: e })
          }
        />
        <FormField
          title="Temp. (°C)"
          otherStyles={sharedStyles.others}
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
          otherStyles={sharedStyles.others}
        />
        <FormField
          title="Additional Interventions"
          otherStyles={sharedStyles.others}
          textAreaStyle={sharedStyles.textArea}
          value={updateForm.additionalInterventions}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, additionalInterventions: e })
          }
        />
      </View>

      <View style={sharedStyles.VMain}>
        <Text style={sharedStyles.tTitle}>
          Secondary Assessment / Interventions
        </Text>
        <View style={sharedStyles.v2}>
          <FormField
            title="Field Diagnosis / Observations (details of chief complaint)"
            otherStyles={sharedStyles.others}
            textAreaStyle={sharedStyles.textArea}
            value={updateForm.fieldDiagnosisObservations}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, fieldDiagnosisObservations: e })
            }
          />
        </View>
      </View>

      <View style={sharedStyles.VMain}>
        <Text style={sharedStyles.tTitle}>Patient Handoff</Text>
        <Text style={sharedStyles.t2b}>Vital Signs (first record)</Text>
        <View style={sharedStyles.vCheck}>
          <Tickbox
            title="Improved"
            value={updateForm.patientCondition === "improved"}
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                patientCondition: isChecked ? "improved" : null,
              })
            }
          />
          <Tickbox
            title="Unchanged"
            value={updateForm.patientCondition === "unchanged"}
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                patientCondition: isChecked ? "unchanged" : null,
              })
            }
          />
          <Tickbox
            title="Deteriorated"
            value={updateForm.patientCondition === "deteriorated"}
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                patientCondition: isChecked ? "deteriorated" : null,
              })
            }
          />
          <Tickbox
            title="Died En Route"
            value={updateForm.patientCondition === "diedEnRoute"}
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                patientCondition: isChecked ? "diedEnRoute" : null,
              })
            }
          />
        </View>

        <View style={sharedStyles.v2}>
          <FormField
            title="Receiving Facility Name"
            otherStyles={sharedStyles.others}
            value={updateForm.receivingFacility}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingFacility: e })
            }
          />
          <FormField
            title="Receiving Department"
            otherStyles={sharedStyles.others}
            value={updateForm.receivingDepartment}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingDepartment: e })
            }
          />
          <FormField
            title="Receiving Doctor or Nurse (print name)"
            otherStyles={sharedStyles.others}
            value={updateForm.receivingDoctorOrNurse}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, receivingDoctorOrNurse: e })
            }
          />
          <FormField
            title="Signature"
            otherStyles={sharedStyles.others}
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
            otherStyles={sharedStyles.others}
          />
        </View>
      </View>
    </View>
  );
};

export default PhysicalAndHandoff;
