import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { setAuthenticated, signInUser } from "../actions/authActions";
import { useDispatch } from "react-redux";
import Button from "../components/Button";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signInUser(email, password);
    dispatch(setAuthenticated(true));
  };

  return (
    <>
      <StatusBar style="light" animated />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/office-couch.jpeg")}
            style={styles.image}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter you email"
              style={styles.input}
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

          <TouchableOpacity style={styles.signInBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordView}>
            <Text style={styles.forgotPassword}>Forgot?</Text>
            <Button text="Reset Password" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
  },

  formContainer: {
    flex: 2,
    padding: 16,
    justifyContent: "center",
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  inputView: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
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
    marginHorizontal: 16,
  },

  signInBtn: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f92b4c",
    marginHorizontal: 16,
    borderRadius: 4,
    marginVertical: 8,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 2,
  },

  forgotPasswordView: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },

  forgotPassword: {
    fontSize: 16,
  },
});

export default Login;
