import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore, storage } from "../firebase/config";
import { ref, uploadBytes } from "firebase/storage";

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setAuthenticated = (authenticated) => {
  return {
    type: "SET_AUTHENTICATED",
    payload: authenticated,
  };
};

export const registerUser = async (userInfo, email, password, profileImage) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredentials.user.uid;
    await setDoc(doc(firestore, "users", uid), userInfo);
    await uploadProfileImage(uid, profileImage);
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const uploadProfileImage = async (uid, image) => {
  try {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const imagesRef = ref(storage, `images/${uid}`);
    await uploadBytes(imagesRef, blob);
  } catch (error) {
    console.log(error);
  }
};
