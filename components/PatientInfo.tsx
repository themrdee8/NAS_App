import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const PatientInfo = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Patient Information</Text>
      <View style={styles.v2}>
        <FormField
          title="Patient Name"
          otherStyles={styles.others}
          value={updateForm.patientName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, patientName: e })
          }
        />
        <FormField
          title="Age"
          otherStyles={styles.others}
          value={updateForm.age}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, age: e })
          }
        />
      </View>

      <Text style={styles.t2}>Gender</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Male" />
        <Tickbox title="Female" />
      </View>

      <View style={styles.v2}>
        <FormField
          title="Address"
          otherStyles={styles.others}
          value={updateForm.address}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, address: e })
          }
        />
        <FormField
          title="Telephone"
          otherStyles={styles.others}
          value={updateForm.telephone}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, telephone: e })
          }
        />
        <FormField
          title="ID No./Passport No."
          otherStyles={styles.others}
          value={updateForm.idPassportNumber}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, idPassportNumber: e })
          }
        />
      </View>

      <Text style={styles.t2}>Contact Person</Text>
      <View style={styles.v2}>
        <FormField
          title="Name"
          otherStyles={styles.others}
          value={updateForm.contactPersonName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, contactPersonName: e })
          }
        />
        <FormField
          title="Telephone"
          otherStyles={styles.others}
          value={updateForm.contactPersonTelephone}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, contactPersonTelephone: e })
          }
        />
      </View>

      <Text style={styles.t2}>Relationship</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Father/Mother" />
        <Tickbox title="Spouse" />
        <Tickbox title="Other" />
      </View>

      <Text style={styles.t2}>Patient Refused Treatment</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Yes" />
        <Tickbox title="No" />
      </View>
    </View>
  );
};

export default PatientInfo;

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
});
