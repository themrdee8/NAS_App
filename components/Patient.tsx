import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";

const Patient = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Patient's Mechanism of Injury</Text>
      <Text style={styles.t2}>(ONLY Trauma Cases)</Text>

      <Text style={styles.t24}></Text>
      <View style={styles.vCheck}>
        <Tickbox title="Alcohol        intoxication" />
        <Tickbox title="Physical assault" />
        <Tickbox title="Sexual assault" />
        <Tickbox title="Burn, chemical" />
        <Tickbox title="Burn, fire" />
        <Tickbox title="Burn, scald" />
        <Tickbox title="Burn trauma" />
        <Tickbox title="Crush injury" />
        <Tickbox title="Domestic abuse" />
        <Tickbox title="Electrocution" />
        <Tickbox title="Explosion/fire blast" />
        <Tickbox title="Fall from 2 ft or less" />
        <Tickbox title="Fall from 2 ft to 8 ft" />
        <Tickbox title="Fall from 8+ ft" />
        <Tickbox title="Hazardous      materials" />
        <Tickbox title="Motor accident" />
      </View>
      <View style={styles.v2}>
        <FormField
          title={<Tickbox title="Other (specify)" centerItem={styles.center} />}
          otherStyles={styles.others}
          value={updateForm.patientMechanismOfInjuryOther}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, patientMechanismOfInjuryOther: e })
          }
        />
      </View>

      <View style={styles.vMain}>
        <Text style={styles.tTitle}>
          For Road Traffic Accidents, Patient{"    "}Was A
        </Text>
        <Text style={styles.t24}></Text>
        <View style={styles.vCheck}>
          <Tickbox title="Driver of vehicle" />
          <Tickbox title="Passenger in vehicle" />
          <Tickbox title="Pedestrian hit by motorbike" />
          <Tickbox title="Pedestrian hit by vehicle" />
        </View>
      </View>

      <View style={styles.vMain}>
        <Text style={styles.tTitle}>
          Healthy
        </Text>
        <View style={styles.vCheck}>
          <Tickbox title=" No medical issues identified" />
        </View>
        <View style={styles.v2}>
        <FormField
          title={<Tickbox title="Other problem not listed (specify)" centerItem={styles.center} />}
          otherStyles={styles.others}
          value={updateForm.otherProblemNotListed}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, otherProblemNotListed: e })
          }
        />
      </View>
      </View>
    </View>
  );
};

export default Patient;

const styles = StyleSheet.create({
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
  t24: {
    fontSize: 18,
    fontWeight: "700",
    color: "#68C44C",
    marginLeft: 18,
    marginTop: 15,
    textTransform: "uppercase",
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
  vMain: {
    paddingBottom: 25,
  },
  textArea: {
    height: 110,
  },
  center: {
    width: "100%",
    marginRight: 20,
  },
});
