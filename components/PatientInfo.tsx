import { Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import { sharedStyles } from "@/sharedStyles";

const PatientInfo = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.VMain}>
      <Text style={sharedStyles.tTitle}>Patient Information</Text>
      <View style={sharedStyles.v2}>
        <FormField
          title="Patient Name"
          otherStyles={sharedStyles.others}
          value={updateForm.patientName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, patientName: e })
          }
        />
        <FormField
          title="Age"
          otherStyles={sharedStyles.others}
          value={updateForm.age}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, age: e })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Gender</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Male"
          value={updateForm.gender === "male"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, gender: isChecked ? "male" : null })
          }
        />
        <Tickbox
          title="Female"
          value={updateForm.gender === "female"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gender: isChecked ? "female" : null,
            })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title="Address"
          otherStyles={sharedStyles.others}
          value={updateForm.address}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, address: e })
          }
        />
        <FormField
          title="Telephone"
          otherStyles={sharedStyles.others}
          value={updateForm.telephone}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, telephone: e })
          }
        />
        <FormField
          title="ID No./Passport No."
          otherStyles={sharedStyles.others}
          value={updateForm.idPassportNumber}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, idPassportNumber: e })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Contact Person</Text>
      <View style={sharedStyles.v2}>
        <FormField
          title="Name"
          otherStyles={sharedStyles.others}
          value={updateForm.contactPersonName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, contactPersonName: e })
          }
        />
        <FormField
          title="Telephone"
          otherStyles={sharedStyles.others}
          value={updateForm.contactPersonTelephone}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, contactPersonTelephone: e })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Relationship</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Father/Mother"
          value={updateForm.relationship === "fatherMother"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              relationship: isChecked ? "fatherMother" : null,
            })
          }
        />
        <Tickbox
          title="Spouse"
          value={updateForm.relationship === "spouse"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              relationship: isChecked ? "spouse" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.relationship === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              relationship: isChecked ? "other" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Patient Refused Treatment</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Yes"
          value={updateForm.patientRefusedTreatment === "yes"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientRefusedTreatment: isChecked ? "yes" : null,
            })
          }
        />
        <Tickbox
          title="No"
          value={updateForm.patientRefusedTreatment === "no"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientRefusedTreatment: isChecked ? "no" : null,
            })
          }
        />
      </View>
    </View>
  );
};

export default PatientInfo;
