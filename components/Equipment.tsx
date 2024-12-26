import { StyleSheet, Text, View } from "react-native";
import Tickbox from "./Tickbox";

const Equipment = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Equipment Used in Ambulance</Text>
      <Text style={styles.t2}>(Check all that apply)</Text>

      <Text style={styles.t24}>Airway</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Fixed suction" />
        <Tickbox title="NPA (naso- pharyngeal airway)" />
        <Tickbox title="OPA (oro-    pharyngeal airway)" />
        <Tickbox title="Portable suction" />
      </View>

      <Text style={styles.t24}>Cardiovascular</Text>
      <View style={styles.vCheck}>
        <Tickbox title="AED (automatic defibrillator)" />
        <Tickbox title="IV cannula and dressing" />
        <Tickbox title="IV tubing" />
        <Tickbox title="Normal saline          (bag #1)" />
        <Tickbox title="Normal saline          (bag #2)" />
        <Tickbox title="Normal saline          (bag #3)" />
        <Tickbox title="Tourniquet" />
      </View>

      <Text style={styles.t24}>Ear-Nose-Mouth-Throat</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Suction (for foreign body)" />
      </View>

      <Text style={styles.t24}>General Medical</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Oral glucose" />
      </View>

      <Text style={styles.t24}>Musculoskeletal/Bleeding</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Bandage (1-inch)" />
        <Tickbox title="Bandage (2-inch)" />
        <Tickbox title="Bandage (3-inch)" />
        <Tickbox title="Bandage (4-inch)" />
        <Tickbox title="Cervical collar" />
        <Tickbox title="Cotton roll" />
        <Tickbox title="Gauze" />
        <Tickbox title="Plaster (tape)" />
      </View>

      <Text style={styles.t24}>Psychiatric/Behavioural</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Restraints" />
      </View>

      <Text style={styles.t24}>Respiratory</Text>
      <View style={styles.vCheck}>
        <Tickbox title="BVM (bag-valve-mask)" />
        <Tickbox title="Oxygen" />
        <Tickbox title="Face mask (adult)" />
        <Tickbox title="Face mask    (pediatric)" />
        <Tickbox title="Nasal cannula" />
        <Tickbox title="Non-rebreather    mask" />
      </View>

      <Text style={styles.t24}>Musculoskeletal/Other</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Sling" />
        <Tickbox title="Spine board" />
        <Tickbox title="Splint (long)" />
        <Tickbox title="Splint (short)" />
        <Tickbox title="Triangular bandage" />
      </View>

      <Text style={styles.t24}>Other Equipment Used</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Bed sheet" />
        <Tickbox title="Blanket" />
        <Tickbox title="Face mask" />
        <Tickbox title="Face shield" />
        <Tickbox title="Gloves" />
      </View>
    </View>
  );
};

export default Equipment;

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
