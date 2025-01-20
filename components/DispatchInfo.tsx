import { Text, View } from "react-native";
import FormField from "./FormField";
import Tickbox from "./Tickbox";
import DateTimeInput from "./DateTimeField";
import { sharedStyles } from "@/sharedStyles";

const Dispatch = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.vMain}>
      <Text style={sharedStyles.tTitle}>Dispatch Information</Text>
      <View style={sharedStyles.v2}>
        <DateTimeInput
          title="Dispatch Date"
          mode="date"
          value={updateForm.dispatchDate}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, dispatchDate: e })
          }
          placeholder="Select a date"
          otherStyles={sharedStyles.others}
        />
      </View>

      <Text style={sharedStyles.t2}>Service Unit Contact</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Hospital/Clinic"
          value={updateForm.serviceUnitContact === "hospitalClinic"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              serviceUnitContact: isChecked ? "hospitalClinic" : null,
            })
          }
        />
        <Tickbox
          title="Residence"
          value={updateForm.serviceUnitContact === "residence"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              serviceUnitContact: isChecked ? "residence" : null,
            })
          }
        />
        <Tickbox
          title="Office/Public"
          value={updateForm.serviceUnitContact === "officePublic"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              serviceUnitContact: isChecked ? "officePublic" : null,
            })
          }
        />
        <Tickbox
          title="Public Place"
          value={updateForm.serviceUnitContact === "publicPlace"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              serviceUnitContact: isChecked ? "publicPlace" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.serviceUnitContact === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              serviceUnitContact: isChecked ? "other" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2}>Ambulance Type</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="BLS (Basic Life Support)"
          value={updateForm.ambulanceType === "basicLifeSupport"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              ambulanceType: isChecked ? "basicLifeSupport" : null,
            })
          }
        />
        <Tickbox
          title="ALS (Advanced Life Support)"
          value={updateForm.ambulanceType === "advancedLifeSupport"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              ambulanceType: isChecked ? "advancedLifeSupport" : null,
            })
          }
        />
        <Tickbox
          title="Private"
          value={updateForm.ambulanceType === "private"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              ambulanceType: isChecked ? "private" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2}>Call Type</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Emergency"
          value={updateForm.callType === "emergency"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              callType: isChecked ? "emergency" : null,
            })
          }
        />
        <Tickbox
          title="Urgent"
          value={updateForm.callType === "urgent"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              callType: isChecked ? "urgent" : null,
            })
          }
        />
        <Tickbox
          title="Routine"
          value={updateForm.callType === "routine"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              callType: isChecked ? "routine" : null,
            })
          }
        />
      </View>

      <Text style={sharedStyles.t2}>Reason for Transfer</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Obstetrics"
          value={updateForm.reasonForTransfer === "obstetrics"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              reasonForTransfer: isChecked ? "obstetrics" : null,
            })
          }
        />
        <Tickbox
          title="Dialysis"
          value={updateForm.reasonForTransfer === "dialysis"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              reasonForTransfer: isChecked ? "dialysis" : null,
            })
          }
        />
        <Tickbox
          title="Physiotherapy"
          value={updateForm.reasonForTransfer === "physiotherapy"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              reasonForTransfer: isChecked ? "physiotherapy" : null,
            })
          }
        />
        <Tickbox
          title="Other"
          value={updateForm.reasonForTransfer === "other"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              reasonForTransfer: isChecked ? "other" : null,
            })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title="KM Reading"
          otherStyles={sharedStyles.others}
          value={updateForm.kmReading}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, kmReading: e })
          }
        />
        <DateTimeInput
          title="Time"
          mode="time"
          value={updateForm.time}
          handleChange={(e: any) => updateSetForm({ ...updateForm, time: e })}
          placeholder="Select a time"
          otherStyles={sharedStyles.others}
        />
        <FormField
          title="Call Number"
          otherStyles={sharedStyles.others}
          value={updateForm.callNumber}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, callNumber: e })
          }
        />
        <FormField
          title="Caller's Name"
          otherStyles={sharedStyles.others}
          value={updateForm.callerName}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, callerName: e })
          }
        />
        <FormField
          title="Dispatcher"
          otherStyles={sharedStyles.others}
          value={updateForm.dispatcher}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, dispatcher: e })
          }
        />
        <DateTimeInput
          title="Time Ambulance Assigned"
          mode="time"
          value={updateForm.timeAmbulanceAssigned}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, timeAmbulanceAssigned: e })
          }
          placeholder="Select a time"
          otherStyles={sharedStyles.others}
        />
        <DateTimeInput
          title="Time Ambulance Arrived Scene"
          mode="time"
          value={updateForm.timeAmbulanceArrivedScene}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, timeAmbulanceArrivedScene: e })
          }
          placeholder="Select a time"
          otherStyles={sharedStyles.others}
        />
        <DateTimeInput
          title="Time Ambulance Left Scene"
          mode="time"
          value={updateForm.timeAmbulanceLeftScene}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, timeAmbulanceLeftScene: e })
          }
          placeholder="Select a time"
          otherStyles={sharedStyles.others}
        />
        <DateTimeInput
          title="Time Arrived Facility"
          mode="time"
          value={updateForm.timeArrivedFacility}
          handleChange={(e: any) =>
            updateSetForm({ ...updateForm, timeArrivedFacility: e })
          }
          placeholder="Select a time"
          otherStyles={sharedStyles.others}
        />
      </View>

      <Text style={sharedStyles.t2}>Arrived At Scene (tick one)</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Ambulance Arrival"
          value={updateForm.arrivedAtScene === "ambulanceArrival"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              arrivedAtScene: isChecked ? "ambulanceArrival" : null,
            })
          }
        />
        <Tickbox
          title="Arrival at Facility"
          value={updateForm.arrivedAtScene === "arrivalAtFacility"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              arrivedAtScene: isChecked ? "arrivalAtFacility" : null,
            })
          }
        />
        <Tickbox
          title="Departed Scene"
          value={updateForm.arrivedAtScene === "departedScene"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              arrivedAtScene: isChecked ? "departedScene" : null,
            })
          }
        />
        <Tickbox
          title="Arrived at Base"
          value={updateForm.arrivedAtScene === "arrivedAtBase"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              arrivedAtScene: isChecked ? "arrivedAtBase" : null,
            })
          }
        />
        <Tickbox
          title="Back in Service"
          value={updateForm.arrivedAtScene === "backInService"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              arrivedAtScene: isChecked ? "backInService" : null,
            })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title="Comments"
          otherStyles={sharedStyles.others}
          textAreaStyle={sharedStyles.textArea}
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
