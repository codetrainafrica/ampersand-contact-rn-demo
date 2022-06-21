import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoImagePicker from "expo-image-picker";

const ImagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = () => {
    return async () => {
      let result = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickImage()}>
      {image ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.editProfilePhoto}>EDIT PROFILE PHOTO</Text>
        </View>
      ) : (
        <View style={styles.picker}>
          <Ionicons name="ios-person-outline" size={50} color="#f92b4c" />
          <Text style={styles.pickerText}>ADD A PROFILE PICTURE</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  picker: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  pickerText: {
    fontSize: 12,
    color: "#f92b4c",
    fontWeight: "bold",
  },

  image: { width: "100%", height: "100%", position: "absolute" },

  editProfilePhoto: {
    color: "#fff",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: "center",
    padding: 5,
    borderRadius: 5,
  },
});

export default ImagePicker;
