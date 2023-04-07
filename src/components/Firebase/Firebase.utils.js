// import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const config = {
  apiKey: "AIzaSyC2G38oOonb55YFHCREEUPVmJ8bIIm4W_g",
  authDomain: "emporium-ff985.firebaseapp.com",
  projectId: "emporium-ff985",
  storageBucket: "emporium-ff985.appspot.com",
  messagingSenderId: "784585036068",
  appId: "1:784585036068:web:9e1cb462e37569ab6423b1",
  measurementId: "G-GL3BPH91T7",
};

// Initialize Firebase
// firebase.initializeApp(config);
const app = initializeApp(config);

// Retrieve services via the defaultApp variable...
// export const auth = firebase.auth();
export const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
// export const firestore = firebase.firestore();
export const db = getFirestore(app);

//for google authentication
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
export default app;
