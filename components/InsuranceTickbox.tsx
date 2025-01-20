import React from "react";
import { Text, View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";
import { sharedStyles } from "@/sharedStyles";

const InsuranceTickbox = ({ updateForm, updateSetForm }: any) => {
  return (
    <View>
      <Text style={sharedStyles.t2b}>Insurance</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="NHIS"
          value={updateForm.insurance === "nhis"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({
              ...updateForm,
              insurance: isChecked ? "nhis" : null,
            })
          }
        />
      </View>

      <View style={sharedStyles.v2}>
        <FormField
          title={
            <Tickbox
              title="Other (specify)"
              value={updateForm.insurance === "other"}
              handleChange={(isChecked: boolean) =>
                updateSetForm({
                  ...updateForm,
                  insurance: isChecked ? "other" : null,
                })
              }
              centerItem={sharedStyles.center}
            />
          }
          otherStyles={sharedStyles.others}
          value={updateForm.insuranceOther}
          handleChangeText={(e: any) =>
            updateSetForm({ ...updateForm, insuranceOther: e })
          }
        />
      </View>
    </View>
  );
};

export default InsuranceTickbox;
