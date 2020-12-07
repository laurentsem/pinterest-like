import firebase from "firebase/firebase-app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzGU_M85cqYMYvRw283FUWOjilwaqwEdE",
    authDomain: "codinterest-8731a.firebaseapp.com",
    projectId: "codinterest-8731a",
    storageBucket: "codinterest-8731a.appspot.com",
    messagingSenderId: "1067179602082",
    appId: "1:1067179602082:web:49416ade186cea6b14e7fb",
    measurementId: "G-N7S202NS45"
};

class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
    }
  }
   
export default Firebase;