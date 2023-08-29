// This is the only place we do import firebase from "firebase";.. rest everywhere in our app we will do import firebase from "./FirebaseConfig"
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAUtkVvRoUTl3lUujjN-vT10liatn8THew",
  authDomain: "fir-1cfac.firebaseapp.com",
  projectId: "fir-1cfac",
  storageBucket: "fir-1cfac.appspot.com",
  messagingSenderId: "225012700018",
  appId: "1:225012700018:web:7e139c3d8b5fa3ab3283eb",
  measurementId: "G-3510203LKF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
