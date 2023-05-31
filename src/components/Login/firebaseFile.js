import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3IwCkX5T8dO-fE8U7927vtm31kyl5D-M",
  authDomain: "facebook-clone-react-41cc4.firebaseapp.com",
  projectId: "facebook-clone-react-41cc4",
  storageBucket: "facebook-clone-react-41cc4.appspot.com",
  messagingSenderId: "214730220001",
  appId: "1:214730220001:web:c0963e9c8fbfa85ce5b2a0",
  measurementId: "G-T3SBTJZJT6",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
