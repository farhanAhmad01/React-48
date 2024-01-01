import  firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCahEESotFScUvBBa4nxhIwf_HkXqOMUM0",

  authDomain: "firegram-5c9ca.firebaseapp.com",

  projectId: "firegram-5c9ca",

  storageBucket: "firegram-5c9ca.appspot.com",

  messagingSenderId: "746889666487",

  appId: "1:746889666487:web:060c454977e01a46dc5232",

  measurementId: "G-XT4N6DHDQL",
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
