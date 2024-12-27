import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";

const Triage = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.VMain}>
      <Text style={styles.tTitle}>Triage</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Red"
          value={updateForm.triage === "red"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, triage: isChecked ? "red" : null })
          }
        />
        <Tickbox
          title="Yellow"
          value={updateForm.triage === "yellow"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, triage: isChecked ? "yellow" : null })
          }
        />
        <Tickbox
          title="Green"
          value={updateForm.triage === "green"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, triage: isChecked ? "green" : null })
          }
        />
        <Tickbox
          title="Black"
          value={updateForm.triage === "black"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, triage: isChecked ? "black" : null })
          }
        />
      </View>

      <Text style={styles.t2}>Primary Assessment (tick as appropriate)</Text>
      <Text style={styles.t2}>Breathing</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Adequate"
          value={updateForm.breathing === "adequate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, breathing: isChecked ? "adequate" : null })
          }
        />
        <Tickbox
          title="Inadequate"
          value={updateForm.breathing === "inadequate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, breathing: isChecked ? "inadequate" : null })
          }
        />
      </View>

      <Text style={styles.t2}>Circulation</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Pulse Present"
          value={updateForm.circulation === "pulsePresent"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, circulation: isChecked ? "pulsePresent" : null })
          }
        />
        <Tickbox
          title="Pulse Absent"
          value={updateForm.circulation === "pulseAbsent"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, circulation: isChecked ? "pulseAbsent" : null })
          }
        />
      </View>

      <Text style={styles.t2}> Consciousness</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Conscious"
          value={updateForm.consciousness === "conscious"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, consciousness: isChecked ? "conscious" : null })
          }
        />
        <Tickbox
          title="Unconscious"
          value={updateForm.consciousness === "unconscious"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, consciousness: isChecked ? "unconscious" : null })
          }
        />
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
