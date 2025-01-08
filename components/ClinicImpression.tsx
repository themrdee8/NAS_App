import { StyleSheet, Text, View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";

const ClinicalImpression = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Clinical Impression</Text>
      <Text style={styles.t2}>
        (Please check up to 3 boxes corresponding to the patient's main
        problems)
      </Text>

      <Text style={styles.t24}>Airway</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Airway blocked"
          value={updateForm.airway === "airwayBlocked"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              airway: isChecked ? "airwayBlocked" : null,
            })
          }
        />
        <Tickbox
          title="Airway problem"
          value={updateForm.airway === "airwayProblem"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              airway: isChecked ? "airwayProblem" : null,
            })
          }
        />
        <Tickbox
          title="Choking"
          value={updateForm.airway === "choking"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              airway: isChecked ? "choking" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Cardiovascular</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Arrhythmia"
          value={updateForm.cardiovascular === "arrhythmia"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "arrhythmia" : null,
            })
          }
        />
        <Tickbox
          title="Cardiac arrest"
          value={updateForm.cardiovascular === "cardiacArrest"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "cardiacArrest" : null,
            })
          }
        />
        <Tickbox
          title="Fainting (syncope)"
          value={updateForm.cardiovascular === "fainting"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "fainting" : null,
            })
          }
        />
        <Tickbox
          title="Heart rate, too slow"
          value={updateForm.cardiovascular === "heartRateTooSlow"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "heartRateTooSlow" : null,
            })
          }
        />
        <Tickbox
          title="Heart rate, too fast"
          value={updateForm.cardiovascular === "heartRateTooFast"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "heartRateTooFast" : null,
            })
          }
        />
        <Tickbox
          title="High blood pressure"
          value={updateForm.cardiovascular === "highBloodPressure"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "highBloodPressure" : null,
            })
          }
        />
        <Tickbox
          title="Low pulse (bradycardia)"
          value={updateForm.cardiovascular === "lowPulse"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "lowPulse" : null,
            })
          }
        />
        <Tickbox
          title="Low blood pressure"
          value={updateForm.cardiovascular === "lowBloodPressure"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "lowBloodPressure" : null,
            })
          }
        />
        <Tickbox
          title="Low blood sugar"
          value={updateForm.cardiovascular === "lowBloodSugar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "lowBloodSugar" : null,
            })
          }
        />
        <Tickbox
          title="Shock"
          value={updateForm.cardiovascular === "shock"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              cardiovascular: isChecked ? "shock" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Ear-Mouth-Nose-Throat</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Ear pain"
          value={updateForm.earMouthNoseThroat === "earPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "earPain" : null,
            })
          }
        />
        <Tickbox
          title="Foreign body in ear"
          value={updateForm.earMouthNoseThroat === "foreignBodyInEar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "foreignBodyInEar" : null,
            })
          }
        />
        <Tickbox
          title="Object stuck in ear"
          value={updateForm.earMouthNoseThroat === "objectStuckInEar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "objectStuckInEar" : null,
            })
          }
        />
        <Tickbox
          title="Object stuck in nose"
          value={updateForm.earMouthNoseThroat === "objectStuckInNose"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "objectStuckInNose" : null,
            })
          }
        />
        <Tickbox
          title="Sore throat"
          value={updateForm.earMouthNoseThroat === "soreThroat"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "soreThroat" : null,
            })
          }
        />
        <Tickbox
          title="Tooth pain"
          value={updateForm.earMouthNoseThroat === "toothPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "toothPain" : null,
            })
          }
        />
        <Tickbox
          title="Object stuck in throat"
          value={updateForm.earMouthNoseThroat === "objectStuckInThroat"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              earMouthNoseThroat: isChecked ? "objectStuckInThroat" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Environmental</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Allergic reaction"
          value={updateForm.environmental === "allergicReaction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "allergicReaction" : null,
            })
          }
        />
        <Tickbox
          title="Alcohol intoxication"
          value={updateForm.environmental === "alcoholIntoxication"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "alcoholIntoxication" : null,
            })
          }
        />
        <Tickbox
          title="Bite, dog"
          value={updateForm.environmental === "biteDog"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "biteDog" : null,
            })
          }
        />
        <Tickbox
          title="Bite, snake"
          value={updateForm.environmental === "biteSnake"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "biteSnake" : null,
            })
          }
        />
        <Tickbox
          title="Bite, other"
          value={updateForm.environmental === "biteOther"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "biteOther" : null,
            })
          }
        />
        <Tickbox
          title="Cold (hypothermia)"
          value={updateForm.environmental === "coldHypothermia"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "coldHypothermia" : null,
            })
          }
        />
        <Tickbox
          title="Poisoning"
          value={updateForm.environmental === "poisoning"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "poisoning" : null,
            })
          }
        />
        <Tickbox
          title="Smoke inhalation"
          value={updateForm.environmental === "smokeInhalation"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "smokeInhalation" : null,
            })
          }
        />
        <Tickbox
          title="Heat (hyperthermia)"
          value={updateForm.environmental === "heatHyperthermia"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              environmental: isChecked ? "heatHyperthermia" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Eyes (Ophthalmologic)</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Blindness (sudden)"
          value={updateForm.eyes === "blindnessSudden"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              eyes: isChecked ? "blindnessSudden" : null,
            })
          }
        />
        <Tickbox
          title="Blurry vision"
          value={updateForm.eyes === "blurryVision"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              eyes: isChecked ? "blurryVision" : null,
            })
          }
        />
        <Tickbox
          title="Eye discharge"
          value={updateForm.eyes === "eyeDischarge"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              eyes: isChecked ? "eyeDischarge" : null,
            })
          }
        />
        <Tickbox
          title="Eye pain"
          value={updateForm.eyes === "eyePain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, eyes: isChecked ? "eyePain" : null })
          }
        />
      </View>

      <Text style={styles.t24}>Gastrointestinal</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Abdominal pain"
          value={updateForm.gastrointestinal === "abdominalPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "abdominalPain" : null,
            })
          }
        />
        <Tickbox
          title="Bleeding from   rectum/stool"
          value={updateForm.gastrointestinal === "bleedingFromRectumStool"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "bleedingFromRectumStool" : null,
            })
          }
        />
        <Tickbox
          title="Constipation"
          value={updateForm.gastrointestinal === "constipation"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "constipation" : null,
            })
          }
        />
        <Tickbox
          title="Diarrhea"
          value={updateForm.gastrointestinal === "diarrhoea"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "diarrhoea" : null,
            })
          }
        />
        <Tickbox
          title="Vomiting"
          value={updateForm.gastrointestinal === "vomiting"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "vomiting" : null,
            })
          }
        />
        <Tickbox
          title="Vomiting, bloody"
          value={updateForm.gastrointestinal === "vomitingBloody"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gastrointestinal: isChecked ? "vomitingBloody" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>General Medical</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Dehydration"
          value={updateForm.generalMedical === "dehydration"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "dehydration" : null,
            })
          }
        />
        <Tickbox
          title="Fatigue/general weakness"
          value={updateForm.generalMedical === "fatigueGeneralWeakness"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "fatigueGeneralWeakness" : null,
            })
          }
        />
        <Tickbox
          title="Fever"
          value={updateForm.generalMedical === "fever"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "fever" : null,
            })
          }
        />
        <Tickbox
          title="General pain  symptom"
          value={updateForm.generalMedical === "generalPainSymptom"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "generalPainSymptom" : null,
            })
          }
        />
        <Tickbox
          title="High blood sugar"
          value={updateForm.generalMedical === "highBloodSugar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "highBloodSugar" : null,
            })
          }
        />
        <Tickbox
          title="Low blood sugar"
          value={updateForm.generalMedical === "lowBloodSugar"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "lowBloodSugar" : null,
            })
          }
        />
        <Tickbox
          title="No specific        reaction"
          value={updateForm.generalMedical === "noSpecificReaction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "noSpecificReaction" : null,
            })
          }
        />
        <Tickbox
          title="Seizure reaction"
          value={updateForm.generalMedical === "seizureReaction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "seizureReaction" : null,
            })
          }
        />
        <Tickbox
          title="Other allergic     reaction"
          value={updateForm.generalMedical === "otherAllergicReaction"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "otherAllergicReaction" : null,
            })
          }
        />
        <Tickbox
          title="Sepsis/infection complication"
          value={updateForm.generalMedical === "sepsisInfectionComplication"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              generalMedical: isChecked ? "sepsisInfectionComplication" : null,
            })
          }
        />
      </View>
      <View style={styles.v2}>
        <FormField
          title={
            <Tickbox
              title="Other (specify)"
              value={updateForm.generalMedical === "other"}
              handleChange={(isChecked: boolean) =>
                updateSetForm({
                  ...updateForm,
                  generalMedical: isChecked ? "other" : null,
                })
              }
              centerItem={styles.center}
            />
          }
          otherStyles={styles.others}
          value={updateForm.generalMedicalOther}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, generalMedicalOther: e })
          }
        />
      </View>

      <Text style={styles.t24}>Gynaecological</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Pelvic pain/     cramping"
          value={updateForm.gynaecological === "pelvicPainCramping"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gynaecological: isChecked ? "pelvicPainCramping" : null,
            })
          }
        />
        <Tickbox
          title="Vaginal bleeding"
          value={updateForm.gynaecological === "vaginalBleeding"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gynaecological: isChecked ? "vaginalBleeding" : null,
            })
          }
        />
        <Tickbox
          title="Vaginal discharge"
          value={updateForm.gynaecological === "vaginalDischarge"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              gynaecological: isChecked ? "vaginalDischarge" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Maternal (Obstetric)</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Cardiac arrest"
          value={updateForm.maternalObstetric === "cardiacArrest"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "cardiacArrest" : null,
            })
          }
        />
        <Tickbox
          title="Labour, under 32 weeks"
          value={updateForm.maternalObstetric === "labourUnder32Weeks"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "labourUnder32Weeks" : null,
            })
          }
        />
        <Tickbox
          title="Labour, over 32   weeks"
          value={updateForm.maternalObstetric === "labourOver32Weeks"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "labourOver32Weeks" : null,
            })
          }
        />
        <Tickbox
          title="Newborn delivery     (by mom)"
          value={updateForm.maternalObstetric === "newbornDeliveryByMom"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "newbornDeliveryByMom" : null,
            })
          }
        />
        <Tickbox
          title="Neonatal delivery"
          value={updateForm.maternalObstetric === "neonatalDelivery"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "neonatalDelivery" : null,
            })
          }
        />
        <Tickbox
          title="Prolonged labour"
          value={updateForm.maternalObstetric === "prolongedLabour"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "prolongedLabour" : null,
            })
          }
        />
        <Tickbox
          title="Pre-labour rupture     of membranes"
          value={updateForm.maternalObstetric === "preLabourRuptureOfMembrane"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked
                ? "preLabourRuptureOfMembrane"
                : null,
            })
          }
        />
        <Tickbox
          title="Vaginal discharge"
          value={updateForm.maternalObstetric === "vaginalDischarge"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "vaginalDischarge" : null,
            })
          }
        />
        <Tickbox
          title="Vaginal bleeding"
          value={updateForm.maternalObstetric === "vaginalBleeding"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              maternalObstetric: isChecked ? "vaginalBleeding" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Musculoskeletal/Injury</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Back pain"
          value={updateForm.musculoskeletalInjury === "backPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              musculoskeletalInjury: isChecked ? "backPain" : null,
            })
          }
        />
        <Tickbox
          title="Can't Walk"
          value={updateForm.musculoskeletalInjury === "cantWalk"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              musculoskeletalInjury: isChecked ? "cantWalk" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Neurological</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Altered level of consciousness"
          value={updateForm.neurological === "alteredLevelOfConsciousness"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "alteredLevelOfConsciousness" : null,
            })
          }
        />
        <Tickbox
          title="CVA/Stroke"
          value={updateForm.neurological === "cvaStroke"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "cvaStroke" : null,
            })
          }
        />
        <Tickbox
          title="Headache"
          value={updateForm.neurological === "headache"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "headache" : null,
            })
          }
        />
        <Tickbox
          title="Seizure, less than 15 minutes"
          value={updateForm.neurological === "seizureLessThan15Minutes"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "seizureLessThan15Minutes" : null,
            })
          }
        />
        <Tickbox
          title="Seizure, over 15 minutes"
          value={updateForm.neurological === "seizureOverThan15Minutes"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "seizureOverThan15Minutes" : null,
            })
          }
        />
        <Tickbox
          title="Seizure with airway compromise"
          value={updateForm.neurological === "seizureWithAIrwayCompromise"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "seizureWithAIrwayCompromise" : null,
            })
          }
        />
        <Tickbox
          title="Weakness               (right side)"
          value={updateForm.neurological === "weaknessRightSide"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "weaknessRightSide" : null,
            })
          }
        />
        <Tickbox
          title="Weakness (left side)"
          value={updateForm.neurological === "weaknessLeftSide"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              neurological: isChecked ? "weaknessLeftSide" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Psychiatric</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Agitation"
          value={updateForm.psychiatric === "agitation"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              psychiatric: isChecked ? "agitation" : null,
            })
          }
        />
        <Tickbox
          title="Anxiety"
          value={updateForm.psychiatric === "anxiety"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              psychiatric: isChecked ? "anxiety" : null,
            })
          }
        />
        <Tickbox
          title="Behavioural      disorder"
          value={updateForm.psychiatric === "behaviouralDisorder"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              psychiatric: isChecked ? "behaviouralDisorder" : null,
            })
          }
        />
        <Tickbox
          title="Depression"
          value={updateForm.psychiatric === "depression"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              psychiatric: isChecked ? "depression" : null,
            })
          }
        />
        <Tickbox
          title="Psychiatric emergency"
          value={updateForm.psychiatric === "psychiatricEmergency"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              psychiatric: isChecked ? "psychiatricEmergency" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Respitory</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Asthma symptoms"
          value={updateForm.respiratory === "asthmaSymptoms"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "asthmaSymptoms" : null,
            })
          }
        />
        <Tickbox
          title="Cough, without blood"
          value={updateForm.respiratory === "coughWithoutBlood"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "coughWithoutBlood" : null,
            })
          }
        />
        <Tickbox
          title="Cough, with blood"
          value={updateForm.respiratory === "coughWithBlood"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "coughWithBlood" : null,
            })
          }
        />
        <Tickbox
          title="Difficulty breathing (mild)"
          value={updateForm.respiratory === "difficultBreathingMild"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "difficultBreathingMild" : null,
            })
          }
        />
        <Tickbox
          title="Difficulty breathing (moderate)"
          value={updateForm.respiratory === "difficultBreathingModerate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "difficultBreathingModerate" : null,
            })
          }
        />
        <Tickbox
          title="Difficulty breathing (severe)"
          value={updateForm.respiratory === "difficultBreathingSevere"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "difficultBreathingSevere" : null,
            })
          }
        />
        <Tickbox
          title="Respiratory       distress"
          value={updateForm.respiratory === "respiratoryDistress"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "respiratoryDistress" : null,
            })
          }
        />
        <Tickbox
          title="Respiratory arrest"
          value={updateForm.respiratory === "respiratoryArrest"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "respiratoryArrest" : null,
            })
          }
        />
        <Tickbox
          title="Shortness of breath"
          value={updateForm.respiratory === "shortnessOfBreath"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              respiratory: isChecked ? "shortnessOfBreath" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Urologic</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Cannot Urinate"
          value={updateForm.urologic === "cannotUrinate"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              urologic: isChecked ? "cannotUrinate" : null,
            })
          }
        />
        <Tickbox
          title="Foley catheter problem"
          value={updateForm.urologic === "foleyCatheterProblem"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              urologic: isChecked ? "foleyCatheterProblem" : null,
            })
          }
        />
      </View>

      <Text style={styles.t24}>Skin (Dermatological)</Text>
      <View style={styles.vCheck}>
        <Tickbox
          title="Bruise (contusion)"
          value={updateForm.skin === "bruiseContusion"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "bruiseContusion" : null,
            })
          }
        />
        <Tickbox
          title="Cut (laceration)"
          value={updateForm.skin === "cutLaceration"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "cutLaceration" : null,
            })
          }
        />
        <Tickbox
          title="Deformity/fracture (limb)"
          value={updateForm.skin === "deformityFractureLimb"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "deformityFractureLimb" : null,
            })
          }
        />
        <Tickbox
          title="Dislocation"
          value={updateForm.skin === "dislocation"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "dislocation" : null,
            })
          }
        />
        <Tickbox
          title="Facial injury"
          value={updateForm.skin === "facialInjury"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "facialInjury" : null,
            })
          }
        />
        <Tickbox
          title="Head injury"
          value={updateForm.skin === "headInjury"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "headInjury" : null,
            })
          }
        />
        <Tickbox
          title="Joint pain"
          value={updateForm.skin === "jointPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "jointPain" : null,
            })
          }
        />
        <Tickbox
          title="Lower extremity pain"
          value={updateForm.skin === "lowerExtremityPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "lowerExtremityPain" : null,
            })
          }
        />
        <Tickbox
          title="Neck pain"
          value={updateForm.skin === "neckPain"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "neckPain" : null,
            })
          }
        />
        <Tickbox
          title="Pain in multiple body areas"
          value={updateForm.skin === "painInMultipleBodyAreas"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "painInMultipleBodyAreas" : null,
            })
          }
        />
        <Tickbox
          title="Pelvic pain                  (not OBS & GYN)"
          value={updateForm.skin === "pelvicPainNotObsGyn"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "pelvicPainNotObsGyn" : null,
            })
          }
        />
        <Tickbox
          title="Swelling (hematoma)"
          value={updateForm.skin === "swellingHematoma"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "swellingHematoma" : null,
            })
          }
        />
        <Tickbox
          title="Painful lesions on   skin"
          value={updateForm.skin === "painfulLesionsOnSkin"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "painfulLesionsOnSkin" : null,
            })
          }
        />
        <Tickbox
          title="Skin infection"
          value={updateForm.skin === "skinInfection"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              skin: isChecked ? "skinInfection" : null,
            })
          }
        />
      </View>
    </View>
  );
};

export default ClinicalImpression;

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
