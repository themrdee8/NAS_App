import { Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import { sharedStyles } from "@/sharedStyles";

const ClinicInfo = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.VMain}>
      <Text style={sharedStyles.tTitle}>Clinical Information</Text>
      <View style={sharedStyles.v2}>
        <FormField
          title="Chief Complaint or Reason for Transport"
          otherStyles={sharedStyles.others}
          value={updateForm.chiefComplaint}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, chiefComplaint: e })
          }
        />
        <FormField
          title="Description of Problem"
          otherStyles={sharedStyles.others}
          textAreaStyle={sharedStyles.textArea}
          value={updateForm.descriptionOfProblem}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, descriptionOfProblem: e })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Body Part Involved(selet one)</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Head/Neck"
          value={updateForm.bodyPartInvolved === "headNeck"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "headNeck" : null,
            })
          }
        />
        <Tickbox
          title="Thorax"
          value={updateForm.bodyPartInvolved === "thorax"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "thorax" : null,
            })
          }
        />
        <Tickbox
          title="Lower Abdomen"
          value={updateForm.bodyPartInvolved === "lowerAbdomen"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "lowerAbdomen" : null,
            })
          }
        />
        <Tickbox
          title="Lower Extremities"
          value={updateForm.bodyPartInvolved === "lowerExtremities"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "lowerExtremities" : null,
            })
          }
        />
        <Tickbox
          title="Upper Abdomen"
          value={updateForm.bodyPartInvolved === "upperAbdomen"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "upperAbdomen" : null,
            })
          }
        />
        <Tickbox
          title="Upper Extremities"
          value={updateForm.bodyPartInvolved === "upperExtremities"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "upperExtremities" : null,
            })
          }
        />
        <Tickbox
          title="Reproductive/Tract"
          value={updateForm.bodyPartInvolved === "reproductiveTract"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "reproductiveTract" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.bodyPartInvolved === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              bodyPartInvolved: isChecked ? "other" : null,
            })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title="Recent Medical History"
          otherStyles={sharedStyles.others}
          value={updateForm.recentMedicalHistory}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, recentMedicalHistory: e })
          }
        />
        <FormField
          title="Recent Medications"
          otherStyles={sharedStyles.others}
          value={updateForm.recentMedications}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, recentMedications: e })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Source of Information(select one)</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Patient"
          value={updateForm.sourceOfInformation === "patient"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "patient" : null,
            })
          }
        />
        <Tickbox
          title="Relative/Friend"
          value={updateForm.sourceOfInformation === "relativeFriend"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "relativeFriend" : null,
            })
          }
        />
        <Tickbox
          title="Nurse"
          value={updateForm.sourceOfInformation === "nurse"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "nurse" : null,
            })
          }
        />
        <Tickbox
          title="Doctor"
          value={updateForm.sourceOfInformation === "doctor"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "doctor" : null,
            })
          }
        />
        <Tickbox
          title="Bystander"
          value={updateForm.sourceOfInformation === "bystander"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "bystander" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.sourceOfInformation === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              sourceOfInformation: isChecked ? "other" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Type of Trauma</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="RTC(Road Traffic Collision)"
          value={updateForm.typeOfTrauma === "roadTrafficCollision"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              typeOfTrauma: isChecked ? "roadTrafficCollision" : null,
            })
          }
        />
        <Tickbox
          title="Industrial Accident"
          value={updateForm.typeOfTrauma === "industrialAccident"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              typeOfTrauma: isChecked ? "industrialAccident" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.typeOfTrauma === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              typeOfTrauma: isChecked ? "other" : null,
            })
          }
        />
        <Tickbox
          title="Trauma"
          value={updateForm.typeOfTrauma === "trauma"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              typeOfTrauma: isChecked ? "trauma" : null,
            })
          }
        />
        <Tickbox
          title="Mental Disorder"
          value={updateForm.typeOfTrauma === "mentalDisorder"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              typeOfTrauma: isChecked ? "mentalDisorder" : null,
            })
          }
        />
      </View>
    </View>
  );
};

export default ClinicInfo;
