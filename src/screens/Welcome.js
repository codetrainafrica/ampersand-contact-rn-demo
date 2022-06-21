import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const Welcome = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/ampersand_logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>AMPERSAND</Text>
        <Text style={styles.title}>CONTACTS</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="GET STARTED" onPress={() => navigate("GetStarted")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  logo: {
    flex: 1,
    resizeMode: "contain",
    height: "70%",
    width: "70%",
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    letterSpacing: 5,
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
