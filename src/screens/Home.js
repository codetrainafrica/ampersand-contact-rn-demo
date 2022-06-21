import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/config";
import QRCode from "react-native-qrcode-svg";
import img from "../../assets/profile-image.jpeg";
import { useSelector } from "react-redux";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const Home = () => {
  const [user, setUser] = useState(null);
  const [imageUri, setImageUri] = useState("");

  const { uid, email } = useSelector(({ user }) => user);

  const getUserDetails = async () => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      const url = await getDownloadURL(ref(storage, `images/${uid}`));
      setImageUri(url);

      const userData = { ...docSnap.data(), image: url, email };

      if (docSnap.exists()) setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      {!user ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <View style={{ flex: 9 }}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>
                Exchange Contact Information
              </Text>
              <Text style={styles.infoText}>
                Scan this QR below to share your contacts
              </Text>
            </View>
            <View style={styles.qrContainer}>
              <QRCode value={JSON.stringify(user)} size={250} />
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileWrapper}>
                <Image source={{ uri: imageUri }} style={styles.profileImage} />
                <View style={styles.profile}>
                  <Text style={styles.profileName}>{user.fullname}</Text>
                  <Text style={styles.profileRole}>{user.role}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Want to add a new connetion?</Text>
            <TouchableOpacity
              style={styles.scanBtn}
              onPress={() => navigate("QRScanner")}
            >
              <Text style={styles.scanBtnText}>Scan QR</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
