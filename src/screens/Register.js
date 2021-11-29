import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import ImagePicker from "../components/ImagePicker";

const Register = () => {
  return (
    <>
      <StatusBar style="light" animated />
      <View style={styles.container}>
        <View style={styles.imagePickerContainer}>
          <ImagePicker />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Enter your full name"
              style={styles.input}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.inputView}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.inputView}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="Enter your phone number"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.inputView}>
            <Text style={styles.label}>Role</Text>
            <TextInput placeholder="Enter your role" style={styles.input} />
          </View>

          <View style={styles.separator} />

          <View style={styles.inputView}>
            <Text style={styles.label}>Twitter</Text>
            <TextInput
              placeholder="Enter your twitter handle"
              style={styles.input}
              keyboardType="twitter"
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.inputView}>
            <Text style={styles.label}>LinkedIn</Text>
            <TextInput
              placeholder="Enter your LinkedIn username"
              style={styles.input}
            />
          </View>

          <View style={styles.separator} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagePickerContainer: {
    flex: 2,
  },

  formContainer: {
    flex: 4,
    paddingHorizontal: 16,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  registerBtn: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f92b4c",
    marginHorizontal: 8,
    borderRadius: 4,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 2,
  },

  inputView: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
  },

  input: {
    maxWidth: "70%",
  },

  separator: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    marginHorizontal: 8,
  },
});

export default Register;
