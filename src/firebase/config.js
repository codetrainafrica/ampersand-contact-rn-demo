import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFL6CAHATHyBvYSfZABvKM4tfLqtrf5Ks",
  authDomain: "ampersand-contacts-demo.firebaseapp.com",
  projectId: "ampersand-contacts-demo",
  storageBucket: "ampersand-contacts-demo.appspot.com",
  messagingSenderId: "439139341876",
  appId: "1:439139341876:web:7c722e79cc58b647e91c61",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
