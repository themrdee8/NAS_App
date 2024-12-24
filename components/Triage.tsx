import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const Triage = ({ upadteForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Triage</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Red" />
        <Tickbox title="Yellow" />
        <Tickbox title="Green" />
        <Tickbox title="Black" />
      </View>

      <Text style={styles.t2}>Primary Assessment (tick as appropriate)</Text>
      <Text style={styles.t2}>Breathing</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Adequate" />
        <Tickbox title="Inadequate" />
      </View>

      <Text style={styles.t2}>Circulation</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Pulse Present" />
        <Tickbox title="Pulse Absent" />
      </View>

      <Text style={styles.t2}> Consciousness</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Conscious" />
        <Tickbox title="Unconscious" />
      </View>
    </View>
  );
};

export default Triage;

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
