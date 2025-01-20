import { Text, View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";
import { sharedStyles } from "@/sharedStyles";

const Patient = ({ updateForm, updateSetForm }: any) => {
  return (
    <View style={sharedStyles.vMain}>
      <Text style={sharedStyles.tTitle}>Patient's Mechanism of Injury</Text>
      <Text style={sharedStyles.t2b}>(ONLY Trauma Cases)</Text>

      <Text style={sharedStyles.t24}></Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Alcohol        intoxication"
          value={updateForm.patientMechanismOfInjury === "alcoholIntoxication"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked
                ? "alcoholIntoxication"
                : null,
            })
          }
        />
        <Tickbox
          title="Physical assault"
          value={updateForm.patientMechanismOfInjury === "physicalAssault"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "physicalAssault" : null,
            })
          }
        />
        <Tickbox
          title="Sexual assault"
          value={updateForm.patientMechanismOfInjury === "sexualAssault"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "sexualAssault" : null,
            })
          }
        />
        <Tickbox
          title="Burn, chemical"
          value={updateForm.patientMechanismOfInjury === "burnChemical"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "burnChemical" : null,
            })
          }
        />
        <Tickbox
          title="Burn, fire"
          value={updateForm.patientMechanismOfInjury === "burnFire"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "burnFire" : null,
            })
          }
        />
        <Tickbox
          title="Burn, scald"
          value={updateForm.patientMechanismOfInjury === "burnScald"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "burnScald" : null,
            })
          }
        />
        <Tickbox
          title="Burn trauma"
          value={updateForm.patientMechanismOfInjury === "burnTrauma"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "burnTrauma" : null,
            })
          }
        />
        <Tickbox
          title="Crush injury"
          value={updateForm.patientMechanismOfInjury === "crushInjury"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "crushInjury" : null,
            })
          }
        />
        <Tickbox
          title="Domestic abuse"
          value={updateForm.patientMechanismOfInjury === "domesticAbuse"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "domesticAbuse" : null,
            })
          }
        />
        <Tickbox
          title="Electrocution"
          value={updateForm.patientMechanismOfInjury === "electrocution"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "electrocution" : null,
            })
          }
        />
        <Tickbox
          title="Explosion/fire blast"
          value={updateForm.patientMechanismOfInjury === "explosionFireBlast"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "explosionFireBlast" : null,
            })
          }
        />
        <Tickbox
          title="Fall from 2 ft or less"
          value={updateForm.patientMechanismOfInjury === "fallFrom2ftOrLess"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "fallFrom2ftOrLess" : null,
            })
          }
        />
        <Tickbox
          title="Fall from 2 ft to 8 ft"
          value={updateForm.patientMechanismOfInjury === "fallFrom2ftTo8ft"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "fallFrom2ftTo8ft" : null,
            })
          }
        />
        <Tickbox
          title="Fall from 8+ ft"
          value={updateForm.patientMechanismOfInjury === "fallFrom8Plusft"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "fallFrom8Plusft" : null,
            })
          }
        />
        <Tickbox
          title="Hazardous      materials"
          value={updateForm.patientMechanismOfInjury === "hazardousMaterials"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "hazardousMaterials" : null,
            })
          }
        />
        <Tickbox
          title="Motor accident"
          value={updateForm.patientMechanismOfInjury === "motorAccident"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              patientMechanismOfInjury: isChecked ? "motorAccident" : null,
            })
          }
        />
      </View>
      <View style={sharedStyles.v2}>
        <FormField
          title={
            <Tickbox
              title="Other (specify)"
              value={updateForm.patientMechanismOfInjury === "other"}
              handleChange={(isChecked: boolean) =>
                updateSetForm({
                  ...updateForm,
                  patientMechanismOfInjury: isChecked ? "other" : null,
                })
              }
              centerItem={sharedStyles.center}
            />
          }
          otherStyles={sharedStyles.others}
          value={updateForm.patientMechanismOfInjuryOther}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, patientMechanismOfInjuryOther: e })
          }
        />
      </View>

      <View style={sharedStyles.vMain}>
        <Text style={sharedStyles.tTitle}>
          For Road Traffic Accidents, Patient{"    "}Was A
        </Text>
        <Text style={sharedStyles.t24}></Text>
        <View style={sharedStyles.vCheck}>
          <Tickbox
            title="Driver of vehicle"
            value={
              updateForm.roadTrafficAccidentPatientWasA === "driverOfVehicle"
            }
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                roadTrafficAccidentPatientWasA: isChecked
                  ? "driverOfVehicle"
                  : null,
              })
            }
          />
          <Tickbox
            title="Passenger in vehicle"
            value={
              updateForm.roadTrafficAccidentPatientWasA === "passengerInVehicle"
            }
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                roadTrafficAccidentPatientWasA: isChecked
                  ? "passengerInVehicle"
                  : null,
              })
            }
          />
          <Tickbox
            title="Pedestrian hit by motorbike"
            value={
              updateForm.roadTrafficAccidentPatientWasA ===
              "padestrianHitByMotorbike"
            }
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                roadTrafficAccidentPatientWasA: isChecked
                  ? "padestrianHitByMotorbike"
                  : null,
              })
            }
          />
          <Tickbox
            title="Pedestrian hit by vehicle"
            value={
              updateForm.roadTrafficAccidentPatientWasA ===
              "padestrianHitByVehicle"
            }
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                roadTrafficAccidentPatientWasA: isChecked
                  ? "padestrianHitByVehicle"
                  : null,
              })
            }
          />
        </View>
      </View>

      <View style={sharedStyles.vMain}>
        <Text style={sharedStyles.tTitle}>Healthy</Text>
        <View style={sharedStyles.vCheck}>
          <Tickbox
            title=" No medical issues identified"
            value={updateForm.healthy === "noMedicalIssuesIdentified"}
            handleChange={(isChecked: boolean) =>
              updateSetForm({
                ...updateForm,
                healthy: isChecked ? "noMedicalIssuesIdentified" : null,
              })
            }
          />
        </View>
        <View style={sharedStyles.v2}>
          <FormField
            title={
              <Tickbox
                title="Other problem not listed (specify)"
                value={updateForm.healthy === "otherProblemNotListed"}
                handleChange={(isChecked: boolean) =>
                  updateSetForm({
                    ...updateForm,
                    healthy: isChecked ? "otherProblemNotListed" : null,
                  })
                }
                centerItem={sharedStyles.center}
              />
            }
            otherStyles={sharedStyles.others}
            value={updateForm.otherProblemNotListed}
            handleChangeText={(e: any) =>
              updateSetForm({ ...updateForm, otherProblemNotListed: e })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Patient;
