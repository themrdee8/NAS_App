import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";

const Dispatch = () => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Dispatch Information</Text>
      <View style={styles.v2}>
        <FormField title="Dispatch Date" otherStyles={styles.others} />
        <Text style={styles.t2}>Service Unit Contact</Text>
        <Text style={styles.t2}>
          Hospital / Clinic - [ ] Residence - [ ] Office / Public - [ ] Public
          Place - [ ] Other
        </Text>
      </View>

      <View style={styles.v2}>
        <Text style={styles.t2}>Ambulance Type</Text>
        <Text style={styles.t2}>
          - [ ] BLS (Basic Life Support) - [ ] ALS (Advanced Life Support) - [ ]
          Private
        </Text>
      </View>

      <View style={styles.v2}>
        <Text style={styles.t2}>Call Type</Text>
        <Text style={styles.t2}>
          - [ ] Emergency - [ ] Urgent - [ ] Routine
        </Text>
      </View>

      <View style={styles.v2}>
        <Text style={styles.t2}>Reason for Transfer</Text>
        <Text style={styles.t2}>
          - [ ] Obstetrics - [ ] Dialysis - [ ] Physiotherapy - [ ] Other
        </Text>
      </View>

      <View style={styles.v2}>
        <FormField title="KM Reading" otherStyles={styles.others} />
        <FormField title="Time" otherStyles={styles.others} />
        <FormField title="Call Number" otherStyles={styles.others} />
        <FormField title="Caller's Name" otherStyles={styles.others} />
        <FormField title="Dispatcher" otherStyles={styles.others} />
        <FormField
          title="Time Ambulance Assigned"
          otherStyles={styles.others}
        />
        <FormField
          title="Time Ambulance Arrived Scene"
          otherStyles={styles.others}
        />
        <FormField
          title="Time Ambulance Left Scene"
          otherStyles={styles.others}
        />
        <FormField title="Time Arrived Facility" otherStyles={styles.others} />
      </View>

      <View style={styles.v2}>
        <Text style={styles.t2}>Arrived At Scene (tick one)</Text>
        <Text style={styles.t2}>
          - [ ] Ambulance Arrival - [ ] Arrival at Facility - [ ] Departed Scene
          - [ ] Arrived at Base - [ ] Back in Service
        </Text>
      </View>

      <View style={styles.v2}>
        <FormField title="Comments" otherStyles={styles.others} />
      </View>
    </View>
  );
};

export default Dispatch;

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
  },
  tTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#68C44C",
    marginLeft: 18,
  },
  vMain: {
    paddingBottom: 25,
  }
});
