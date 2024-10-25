import { StyleSheet, Text, View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";

const ClinicalImpression = () => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Clinical Impression</Text>
      <Text style={styles.t2}>
        (Please check up to 3 boxes corresponding to the patient's main
        problems)
      </Text>

      <Text style={styles.t24}>Airway</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Airway blocked" />
        <Tickbox title="Airway problem" />
        <Tickbox title="Choking" />
      </View>

      <Text style={styles.t24}>Cardiovascular</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Arrhythmia" />
        <Tickbox title="Cardiac arrest" />
        <Tickbox title="Fainting (syncope)" />
        <Tickbox title="Heart rate, too slow" />
        <Tickbox title="Heart rate, too fast" />
        <Tickbox title="High blood pressure" />
        <Tickbox title="Low pulse (bradycardia)" />
        <Tickbox title="Low blood pressure" />
        <Tickbox title="Low blood sugar" />
        <Tickbox title="Shock" />
      </View>

      <Text style={styles.t24}>Ear-Mouth-Nose-Throat</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Ear pain" />
        <Tickbox title="Foreign body in ear" />
        <Tickbox title="Object stuck in ear" />
        <Tickbox title="Object stuck in nose" />
        <Tickbox title="Sore throat" />
        <Tickbox title="Tooth pain" />
        <Tickbox title="Object stuck in throat" />
      </View>

      <Text style={styles.t24}>Environmental</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Allergic reaction" />
        <Tickbox title="Alcohol intoxication" />
        <Tickbox title="Bite, dog" />
        <Tickbox title="Bite, snake" />
        <Tickbox title="Bite, other" />
        <Tickbox title="Cold (hypothermia)" />
        <Tickbox title="Poisoning" />
        <Tickbox title="Smoke inhalation" />
        <Tickbox title="Heat (hyperthermia)" />
      </View>

      <Text style={styles.t24}>Eyes (Ophthalmologic)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Blindness (sudden)" />
        <Tickbox title="Blurry vision" />
        <Tickbox title="Eye discharge" />
        <Tickbox title="Eye pain" />
      </View>

      <Text style={styles.t24}>Gastrointestinal</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Abdominal pain" />
        <Tickbox title="Bleeding from   rectum/stool" />
        <Tickbox title="Constipation" />
        <Tickbox title="Diarrhea" />
        <Tickbox title="Vomiting" />
        <Tickbox title="Vomiting, bloody" />
      </View>

      <Text style={styles.t24}>General Medical</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Dehydration" />
        <Tickbox title="Fatigue/general weakness" />
        <Tickbox title="Fever" />
        <Tickbox title="General pain  symptom" />
        <Tickbox title="High blood sugar" />
        <Tickbox title="Low blood sugar" />
        <Tickbox title="No specific        reaction" />
        <Tickbox title="Seizure reaction" />
        <Tickbox title="Other allergic     reaction" />
        <Tickbox title="Sepsis/infection complication" />
      </View>
      <View style={styles.v2}>
        <FormField
          title={<Tickbox title="Other (specify)" centerItem={styles.center} />}
          otherStyles={styles.others}
        />
      </View>

      <Text style={styles.t24}>Gynaecological</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Pelvic pain/     cramping" />
        <Tickbox title="Vaginal bleeding" />
        <Tickbox title="Vaginal discharge" />
      </View>

      <Text style={styles.t24}>Maternal (Obstetric)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Cardiac arrest" />
        <Tickbox title="Labour, under 32 weeks" />
        <Tickbox title="Labour, over 32   weeks" />
        <Tickbox title="Newborn delivery     (by mom)" />
        <Tickbox title="Neonatal delivery" />
        <Tickbox title="Prolonged labour" />
        <Tickbox title="Pre-labour rupture     of membranes" />
        <Tickbox title="Vaginal discharge" />
        <Tickbox title="Vaginal bleeding" />
      </View>

      <Text style={styles.t24}>Musculoskeletal/Injury</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Back pain" />
        <Tickbox title="Can't Walk" />
      </View>

      <Text style={styles.t24}>Neurological</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Altered level of consciousness" />
        <Tickbox title="CVA/Stroke" />
        <Tickbox title="Headache" />
        <Tickbox title="Seizure, less than 15 minutes" />
        <Tickbox title="Seizure, over 15 minutes" />
        <Tickbox title="Seizure with airway compromise" />
        <Tickbox title="Weakness               (right side)" />
        <Tickbox title="Weakness (left side)" />
      </View>

      <Text style={styles.t24}>Psychiatric</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Agitation" />
        <Tickbox title="Anxiety" />
        <Tickbox title="Behavioural      disorder" />
        <Tickbox title="Depression" />
        <Tickbox title="Psychiatric emergency" />
      </View>

      <Text style={styles.t24}>Respitory</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Asthma symptoms" />
        <Tickbox title="Cough, without blood" />
        <Tickbox title="Cough, with blood" />
        <Tickbox title="Difficulty breathing (mild)" />
        <Tickbox title="Difficulty breathing (moderate)" />
        <Tickbox title="Difficulty breathing (severe)" />
        <Tickbox title="Respiratory       distress" />
        <Tickbox title="Respiratory arrest" />
        <Tickbox title="Shortness of breath" />
      </View>

      <Text style={styles.t24}>Urologic</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Cannot Urinate" />
        <Tickbox title="Foley catheter problem" />
      </View>

      <Text style={styles.t24}>Skin (Dermatological)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Bruise (contusion)" />
        <Tickbox title="Cut (laceration)" />
        <Tickbox title="Deformity/fracture (limb)" />
        <Tickbox title="Dislocation" />
        <Tickbox title="Facial injury" />
        <Tickbox title="Head injury" />
        <Tickbox title="Joint pain" />
        <Tickbox title="Lower extremity pain" />
        <Tickbox title="Neck pain" />
        <Tickbox title="Pain in multiple body areas" />
        <Tickbox title="Pelvic pain                  (not OBS & GYN)" />
        <Tickbox title="Swelling (hematoma)" />
        <Tickbox title="Painful lesions on   skin" />
        <Tickbox title="Skin infection" />
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
