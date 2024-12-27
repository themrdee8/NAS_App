import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const ClinicInfo = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Clinical Information</Text>
      <View style={styles.v2}>
        <FormField
          title="Chief Complaint or Reason for Transport"
          otherStyles={styles.others}
          value={updateForm.chiefComplaint}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, chiefComplaint: e })
          }
        />
        <FormField
          title="Description of Problem"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
          value={updateForm.descriptionOfProblem}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, descriptionOfProblem: e })
          }
        />
      </View>

      <Text style={styles.t2}>Body Part Involved(selet one)</Text>
      <View style={styles.vCheck}>
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

      <View style={styles.v2}>
        <FormField
          title="Recent Medical History"
          otherStyles={styles.others}
          value={updateForm.recentMedicalHistory}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, recentMedicalHistory: e })
          }
        />
        <FormField
          title="Recent Medications"
          otherStyles={styles.others}
          value={updateForm.recentMedications}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, recentMedications: e })
          }
        />
      </View>

      <Text style={styles.t2}>Source of Information(select one)</Text>
      <View style={styles.vCheck}>
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

      <Text style={styles.t2}>Type of Trauma</Text>
      <View style={styles.vCheck}>
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
