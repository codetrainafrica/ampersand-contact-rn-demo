import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 9 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Exchange Contact Information</Text>
          <Text style={styles.infoText}>
            Scan this QR below to share your contacts
          </Text>
        </View>
        <View style={styles.qrContainer}>
          <QRCode content="hh" />
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileWrapper}>
            <Image
              source={require("../../assets/profile-image.jpeg")}
              style={styles.profileImage}
            />
            <View style={styles.profile}>
              <Text style={styles.profileName}>Joan Shay</Text>
              <Text style={styles.profileRole}>Head of Marketing</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Want to add a new connetion?</Text>
        <TouchableOpacity style={styles.scanBtn}>
          <Text style={styles.scanBtnText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 2.5,
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  infoText: {
    fontSize: 15,
    letterSpacing: 1,
    color: "#8E8E93",
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  profileRole: {
    color: "#8E8E93",
    letterSpacing: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
  },

  qrContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  profileContainer: {
    flex: 2.5,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 32,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 8,
  },

  profile: {
    height: "100%",
    justifyContent: "space-evenly",
    marginLeft: 8,
  },

  profileWrapper: {
    height: 50,
    flexDirection: "row",
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#dfdfdf",
  },

  footerText: {
    letterSpacing: 1,
  },

  scanBtn: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderColor: "#f92b4c",
  },

  scanBtnText: {
    fontWeight: "500",
    letterSpacing: 1,
    color: "#f92b4c",
  },
});

export default Home;
