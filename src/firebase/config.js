import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFL6CAHATHyBvYSfZABvKM4tfLqtrf5Ks",
  authDomain: "ampersand-contacts-demo.firebaseapp.com",
  projectId: "ampersand-contacts-demo",
  storageBucket: "ampersand-contacts-demo.appspot.com",
  messagingSenderId: "439139341876",
  appId: "1:439139341876:web:7c722e79cc58b647e91c61",
  storageBucket: "gs://ampersand-contacts-demo.appspot.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
