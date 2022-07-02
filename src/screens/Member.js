import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo, Feather, EvilIcons } from "@expo/vector-icons";

const Profile = ({ route }) => {
  const { fullname, email, phone, role, image } = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <Image source={{ uri: image }} style={styles.profileImage} />
          <View style={styles.profile}>
            <Text style={styles.profileName}>{fullname}</Text>
            <Text style={styles.profileRole}>{role}</Text>
          </View>
        </View>
      </View>

      <View style={styles.socialIconsContainer}>
        <View
          style={{
            padding: 16,
            backgroundColor: "#4c4d4f",
            borderRadius: 100,
            marginRight: 8,
          }}
        >
          <AntDesign name="twitter" size={16} color="#fff" />
        </View>

        <View
          style={{
            padding: 16,
            backgroundColor: "#4c4d4f",
            borderRadius: 100,
            marginLeft: 8,
          }}
        >
          <Entypo name="linkedin" size={16} color="#fff" />
        </View>
      </View>

      <View>
        <View style={{ paddingVertical: 16, flexDirection: "row" }}>
          <Feather name="phone" size={22} color="black" />
          <Text style={{ fontSize: 22, marginLeft: 8 }}>{phone}</Text>
        </View>

        <View style={{ paddingVertical: 16, flexDirection: "row" }}>
          <Feather name="mail" size={22} color="black" />
          <Text style={{ fontSize: 22, marginLeft: 8 }}>{email}</Text>
        </View>

        <View style={{ paddingVertical: 16, flexDirection: "row" }}>
          <EvilIcons name="location" size={22} color="black" />
          <Text style={{ fontSize: 22, marginLeft: 8 }}>
            Stuttgart, Germany
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 32,
  },

  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
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

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  profileRole: {
    color: "#8E8E93",
    letterSpacing: 1,
  },

  socialIconsContainer: {
    paddingVertical: 32,
    flexDirection: "row",
  },
});

export default Profile;
