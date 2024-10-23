import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import FormField from "./FormField";

const Triage = () => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Triage</Text>
      <View style={styles.v2}>
        <Text style={styles.t2}>
          - [ ] Red - [ ] Yellow - [ ] Green - [ ] Black
        </Text>

        <Text style={styles.t2}>Primary Assessment (tick as appropriate)</Text>
        <View style={styles.v2}>
          <Text style={styles.t2}>Breathing</Text>
          <Text style={styles.t2}>- [ ] Adequate - [ ] Inadequate</Text>

          <Text style={styles.t2}>Circulation</Text>
          <Text style={styles.t2}>- [ ] Pulse Present - [ ] Pulse Absent</Text>

          <Text style={styles.t2}> Consciousness</Text>
          <Text style={styles.t2}>- [ ] Conscious - [ ] Unconscious</Text>
        </View>
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
  },
  tTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#68C44C",
    marginLeft: 18,
  },
});
