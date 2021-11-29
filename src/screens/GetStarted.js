import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const GetStarted = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/get_started_background.jpeg")}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
          </Text>

          <Text style={styles.mutedText}>
            Sign in or register with your Ampersand email
          </Text>
        </View>

        <View style={styles.btnsContainer}>
          <Button
            text="REGISTER"
            containerStyle={styles.btn}
            onPress={() => navigate("Register")}
          />
          <Button
            text="SIGN IN"
            containerStyle={styles.btn}
            onPress={() => navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1.5,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  detailsContainer: {
    flex: 1,
    padding: 12,
  },

  introText: {
    fontSize: 18,
    letterSpacing: 1,
  },

  introContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  btnsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },

  mutedText: {
    color: "#7f7f7f",
    letterSpacing: 1,
  },

  btn: {
    alignSelf: "center",
  },
});

export default GetStarted;
