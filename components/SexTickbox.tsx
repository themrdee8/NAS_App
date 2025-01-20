import React from "react";
import { Text, View } from "react-native";
import Tickbox from "./Tickbox";
import { sharedStyles } from "@/sharedStyles";

const SexTickbox = ({ updateForm, updateSetForm }: any) => {
  return (
    <View>
      <Text style={sharedStyles.t2b}>Sex</Text>
      <View style={sharedStyles.vCheck}>
        <Tickbox
          title="Male"
          value={updateForm.sex === "male"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, sex: isChecked ? "male" : null })
          }
        />
        <Tickbox
          title="Female"
          value={updateForm.sex === "female"}
          handleChange={(isChecked: boolean) =>
            updateSetForm({ ...updateForm, sex: isChecked ? "female" : null })
          }
        />
      </View>
    </View>
  );
};

export default SexTickbox;
