import { Text, View } from "react-native";
import Tickbox from "./Tickbox";
import { sharedStyles } from "@/sharedStyles";

const Equipment = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.vMain}>
      <Text style={sharedStyles.tTitle}>Equipment Used in Ambulance</Text>
      <Text style={sharedStyles.t2b}>(Check all that apply)</Text>

      <Text style={sharedStyles.t24}>Airway</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Fixed suction"
          value={updateForm.equipmentAirway === "fixedSuction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentAirway: isChecked ? "fixedSuction" : null,
            })
          }
        />
        <Tickbox
          title="NPA (naso- pharyngeal airway)"
          value={updateForm.equipmentAirway === "npa"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentAirway: isChecked ? "npa" : null,
            })
          }
        />
        <Tickbox
          title="OPA (oro-    pharyngeal airway)"
          value={updateForm.equipmentAirway === "opa"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentAirway: isChecked ? "opa" : null,
            })
          }
        />
        <Tickbox
          title="Portable suction"
          value={updateForm.equipmentAirway === "portableSuction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentAirway: isChecked ? "portableSuction" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentAirway === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentAirway: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Cardiovascular</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="AED (automatic defibrillator)"
          value={updateForm.equipmentCardiovascular === "aed"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "aed" : null,
            })
          }
        />
        <Tickbox
          title="IV cannula and dressing"
          value={updateForm.equipmentCardiovascular === "ivCannulaAndDressing"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked
                ? "ivCannulaAndDressing"
                : null,
            })
          }
        />
        <Tickbox
          title="IV tubing"
          value={updateForm.equipmentCardiovascular === "ivTubing"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "ivTubing" : null,
            })
          }
        />
        <Tickbox
          title="Normal saline          (bag #1)"
          value={updateForm.equipmentCardiovascular === "normalSalineBag1"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "normalSalineBag1" : null,
            })
          }
        />
        <Tickbox
          title="Normal saline          (bag #2)"
          value={updateForm.equipmentCardiovascular === "normalSalineBag2"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "normalSalineBag2" : null,
            })
          }
        />
        <Tickbox
          title="Normal saline          (bag #3)"
          value={updateForm.equipmentCardiovascular === "normalSalineBag3"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "normalSalineBag3" : null,
            })
          }
        />
        <Tickbox
          title="Tourniquet"
          value={updateForm.equipmentCardiovascular === "tourniquet"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "tourniquet" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentCardiovascular === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentCardiovascular: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Ear-Nose-Mouth-Throat</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Suction (for         foreign body)"
          value={updateForm.equipmentEarMouth === "suction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentEarMouth: isChecked ? "suction" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentEarMouth === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentEarMouth: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>General Medical</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Oral glucose"
          value={updateForm.equipmentGeneralMedical === "oralGlucose"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentGeneralMedical: isChecked ? "oralGlucose" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentGeneralMedical === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentGeneralMedical: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Musculoskeletal/Bleeding</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Bandage (1-inch)"
          value={updateForm.equipmentMusculoskeletal === "bandage1inch"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "bandage1inch" : null,
            })
          }
        />
        <Tickbox
          title="Bandage (2-inch)"
          value={updateForm.equipmentMusculoskeletal === "bandage2inch"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "bandage2inch" : null,
            })
          }
        />
        <Tickbox
          title="Bandage (3-inch)"
          value={updateForm.equipmentMusculoskeletal === "bandage3inch"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "bandage3inch" : null,
            })
          }
        />
        <Tickbox
          title="Bandage (4-inch)"
          value={updateForm.equipmentMusculoskeletal === "bandage4inch"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "bandage4inch" : null,
            })
          }
        />
        <Tickbox
          title="Cervical collar"
          value={updateForm.equipmentMusculoskeletal === "cervicalCollar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "cervicalCollar" : null,
            })
          }
        />
        <Tickbox
          title="Cotton roll"
          value={updateForm.equipmentMusculoskeletal === "cottonRoll"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "cottonRoll" : null,
            })
          }
        />
        <Tickbox
          title="Gauze"
          value={updateForm.equipmentMusculoskeletal === "gauze"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "gauze" : null,
            })
          }
        />
        <Tickbox
          title="Plaster (tape)"
          value={updateForm.equipmentMusculoskeletal === "plasterTape"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "plasterTape" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentMusculoskeletal === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletal: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Psychiatric/Behavioural</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Restraints"
          value={updateForm.equipmentPsychiatric === "restraints"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentPsychiatric: isChecked ? "restraints" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentPsychiatric === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentPsychiatric: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Respiratory</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="BVM (bag-valve-mask)"
          value={updateForm.equipmentRespiratory === "bvm"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "bvm" : null,
            })
          }
        />
        <Tickbox
          title="Oxygen"
          value={updateForm.equipmentRespiratory === "oxygen"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "oxygen" : null,
            })
          }
        />
        <Tickbox
          title="Face mask (adult)"
          value={updateForm.equipmentRespiratory === "faceMaskAdult"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "faceMaskAdult" : null,
            })
          }
        />
        <Tickbox
          title="Face mask    (pediatric)"
          value={updateForm.equipmentRespiratory === "faceMaskPediatric"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "faceMaskPediatric" : null,
            })
          }
        />
        <Tickbox
          title="Nasal cannula"
          value={updateForm.equipmentRespiratory === "nasalCannula"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "nasalCannula" : null,
            })
          }
        />
        <Tickbox
          title="Non-rebreather    mask"
          value={updateForm.equipmentRespiratory === "nonRebreatherMask"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "nonRebreatherMask" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentRespiratory === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentRespiratory: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Musculoskeletal/Other</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Sling"
          value={updateForm.equipmentMusculoskeletalOther === "sling"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked ? "sling" : null,
            })
          }
        />
        <Tickbox
          title="Spine board"
          value={updateForm.equipmentMusculoskeletalOther === "spineBoard"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked ? "spineBoard" : null,
            })
          }
        />
        <Tickbox
          title="Splint (long)"
          value={updateForm.equipmentMusculoskeletalOther === "splintLong"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked ? "splintLong" : null,
            })
          }
        />
        <Tickbox
          title="Splint (short)"
          value={updateForm.equipmentMusculoskeletalOther === "splintShort"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked ? "splintShort" : null,
            })
          }
        />
        <Tickbox
          title="Triangular bandage"
          value={
            updateForm.equipmentMusculoskeletalOther === "triangularBandage"
          }
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked
                ? "triangularBandage"
                : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.equipmentMusculoskeletalOther === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              equipmentMusculoskeletalOther: isChecked ? "none" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t24}>Other Equipment Used</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Bed sheet"
          value={updateForm.otherEquipmentUsed === "bedSheet"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "bedSheet" : null,
            })
          }
        />
        <Tickbox
          title="Blanket"
          value={updateForm.otherEquipmentUsed === "blanket"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "blanket" : null,
            })
          }
        />
        <Tickbox
          title="Face mask"
          value={updateForm.otherEquipmentUsed === "faceMask"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "faceMask" : null,
            })
          }
        />
        <Tickbox
          title="Face shield"
          value={updateForm.otherEquipmentUsed === "faceShield"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "faceShield" : null,
            })
          }
        />
        <Tickbox
          title="Gloves"
          value={updateForm.otherEquipmentUsed === "gloves"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "gloves" : null,
            })
          }
        />
        <Tickbox
          title="None"
          value={updateForm.otherEquipmentUsed === "none"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              otherEquipmentUsed: isChecked ? "none" : null,
            })
          }
        />
      </View>
    </View>
  );
};

export default Equipment;
