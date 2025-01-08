import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tickbox from "./Tickbox";

const SexTickbox = ({ updateForm, updateSetForm }: any) => {
  return (
    <View>
      <Text style={styles.t2}>Sex</Text>
      <View style={styles.vCheck}>
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
