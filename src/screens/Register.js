import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { registerUser } from "../actions/authActions";
import ImagePicker from "../components/ImagePicker";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = () => {
    const userInfo = {
      fullname,
      role,
      phone,
      twitter,
      linkedin,
      email,
      password,
    };

    registerUser(userInfo);
  };

  return (
    <>
      <StatusBar style="light" animated />
      <View style={styles.container}>
        <View style={styles.imagePickerContainer}>
          <ImagePicker />
        </View>
        <View style={styles.formContainer}>
          <ScrollView>
            <View style={styles.inputView}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                placeholder="Enter your full name"
                style={styles.input}
                value={fullname}
                onChangeText={setFullname}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                placeholder="Enter your phone number"
                style={styles.input}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>Role</Text>
              <TextInput
                placeholder="Enter your role"
                style={styles.input}
                value={role}
                onChangeText={setRole}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>Twitter</Text>
              <TextInput
                placeholder="Enter your twitter handle"
                style={styles.input}
                keyboardType="twitter"
                value={twitter}
                onChangeText={setTwitter}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.inputView}>
              <Text style={styles.label}>LinkedIn</Text>
              <TextInput
                placeholder="Enter your LinkedIn username"
                style={styles.input}
                value={linkedin}
                onChangeText={setLinkedin}
              />
            </View>

            <View style={styles.separator} />
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>
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
    height: 60,
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
