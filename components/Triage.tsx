import { Text } from "react-native";
import { View } from "react-native";
import Tickbox from "./Tickbox";
import { sharedStyles } from "@/sharedStyles";

const Triage = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.VMain}>
      <Text style={sharedStyles.tTitle}>Triage</Text>
      <View style={sharedStyles.vCheck}>
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
            updateSetForm({
              ...updateForm,
              triage: isChecked ? "yellow" : null,
            })
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

      <Text style={sharedStyles.t2b}>
        Primary Assessment (tick as appropriate)
      </Text>
      <Text style={sharedStyles.t2b}>Breathing</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Adequate"
          value={updateForm.breathing === "adequate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              breathing: isChecked ? "adequate" : null,
            })
          }
        />
        <Tickbox
          title="Inadequate"
          value={updateForm.breathing === "inadequate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              breathing: isChecked ? "inadequate" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}>Circulation</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Pulse Present"
          value={updateForm.circulation === "pulsePresent"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              circulation: isChecked ? "pulsePresent" : null,
            })
          }
        />
        <Tickbox
          title="Pulse Absent"
          value={updateForm.circulation === "pulseAbsent"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              circulation: isChecked ? "pulseAbsent" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2b}> Consciousness</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Conscious"
          value={updateForm.consciousness === "conscious"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              consciousness: isChecked ? "conscious" : null,
            })
          }
        />
        <Tickbox
          title="Unconscious"
          value={updateForm.consciousness === "unconscious"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              consciousness: isChecked ? "unconscious" : null,
            })
          }
        />
      </View>
    </View>
  );
};

export default Triage;
