import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStartedBtn = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("GetStarted")}
    >
      <Text style={styles.btnText}>GET STARTED</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: "#b46754",
    borderBottomWidth: 2,
  },

  btnText: {
    fontSize: 16,
  },
});

export default GetStartedBtn;
