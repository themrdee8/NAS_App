import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tickbox from "./Tickbox";
import FormField from "./FormField";

const InsuranceTickbox = ({ updateForm, updateSetForm }: any) => {
  return (
    <View>
      <Text style={styles.t2}>Insurance</Text>
      <View style={styles.vCheck}>
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

      <View style={styles.v2}>
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
              centerItem={styles.center}
            />
          }
          otherStyles={styles.others}
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

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#10251E",
    height: "100%",
    paddingTop: 25,
  },
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
  button: {
    padding: 0,
    marginTop: 40,
    borderRadius: 8,
    width: 399,
    marginLeft: 14,
  },
  textStyle: {
    padding: 5,
  },
  bView: {
    paddingBottom: 80,
  },
  center: {
    width: "100%",
    marginRight: 20,
  },
});
