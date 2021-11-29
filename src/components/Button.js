import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ text, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onPress()}
    >
      <Text style={[styles.btnText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomColor: "#b46754",
    borderBottomWidth: 2,
  },

  btnText: {
    fontSize: 16,
  },
});

export default Button;
