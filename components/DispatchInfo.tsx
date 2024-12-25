import { StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";

const Dispatch = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTitle}>Dispatch Information</Text>
      <View style={styles.v2}>
        <DateTimeInput
          title="Dispatch Date"
          mode="date"
          value={updateForm.dispatchDate}
          handleChange={(e: any) => updateSetForm({...updateForm, dispatchDate: e})}
          placeholder="Select a date"
          otherStyles={styles.others}
        />
      </View>

      <Text style={styles.t2}>Service Unit Contact</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Hospital/Clinic" />
        <Tickbox title="Residence" />
        <Tickbox title="Office/Public" />
        <Tickbox title="Public Place" />
        <Tickbox title="Other" />
      </View>

      <Text style={styles.t2}>Ambulance Type</Text>
      <View style={styles.vCheck}>
        <Tickbox title="BLS (Basic Life Support)" />
        <Tickbox title="ALS (Advanced Life Support)" />
        <Tickbox title="Private" />
      </View>

      <Text style={styles.t2}>Call Type</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Emergency" />
        <Tickbox title="Urgent" />
        <Tickbox title="Routine" />
      </View>

      <Text style={styles.t2}>Reason for Transfer</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Obstetrics" />
        <Tickbox title="Dialysis" />
        <Tickbox title="Physiotherapy" />
        <Tickbox title="Other" />
      </View>

      <View style={styles.v2}>
        <FormField
          title="KM Reading"
          otherStyles={styles.others}
          value={updateForm.kmReading}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, kmReading: e })
          }
        />
        <DateTimeInput
          title="Time"
          mode="time"
          value={updateForm.time}
          handleChange={(e: any) => updateSetForm({...updateForm, time: e})}
          placeholder="Select a time"
          otherStyles={styles.others}
        />
        <FormField
          title="Call Number"
          otherStyles={styles.others}
          value={updateForm.callNumber}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, callNumber: e })
          }
        />
        <FormField
          title="Caller's Name"
          otherStyles={styles.others}
          value={updateForm.callerName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, callerName: e })
          }
        />
        <FormField
          title="Dispatcher"
          otherStyles={styles.others}
          value={updateForm.dispatcher}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, dispatcher: e })
          }
        />
        <DateTimeInput
          title="Time Ambulance Assigned"
          mode="time"
          value={updateForm.timeAmbulanceAssigned}
          handleChange={(e: any) => updateSetForm({...updateForm, timeAmbulanceAssigned: e})}
          placeholder="Select a time"
          otherStyles={styles.others}
        />
        <DateTimeInput
          title="Time Ambulance Arrived Scene"
          mode="time"
          value={updateForm.timeAmbulanceArrivedScene}
          handleChange={(e: any) => updateSetForm({...updateForm, timeAmbulanceArrivedScene: e})}
          placeholder="Select a time"
          otherStyles={styles.others}
        />
        <DateTimeInput
          title="Time Ambulance Left Scene"
          mode="time"
          value={updateForm.timeAmbulanceLeftScene}
          handleChange={(e: any) => updateSetForm({...updateForm, timeAmbulanceLeftScene: e})}
          placeholder="Select a time"
          otherStyles={styles.others}
        />
        <DateTimeInput
          title="Time Arrived Facility"
          mode="time"
          value={updateForm.timeArrivedFacility}
          handleChange={(e: any) => updateSetForm({...updateForm, timeArrivedFacility: e})}
          placeholder="Select a time"
          otherStyles={styles.others}
        />
      </View>

      <Text style={styles.t2}>Arrived At Scene (tick one)</Text>
      <View style={styles.vCheck}>
        <Tickbox title="Ambulance Arrival" />
        <Tickbox title="Arrival at Facility" />
        <Tickbox title="Departed Scene" />
        <Tickbox title="Arrived at Base" />
        <Tickbox title="Back in Service" />
      </View>

      <View style={styles.v2}>
        <FormField
          title="Comments"
          otherStyles={styles.others}
          textAreaStyle={styles.textArea}
          value={updateForm.comments}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, comments: e })
          }
        />
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
  vMain: {
    paddingBottom: 25,
  },
  textArea: {
    height: 110,
  },
});
