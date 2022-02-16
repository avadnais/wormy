// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA74o5gOI0SWLXsj9Tzxud78MeqRQ3ogk",
  authDomain: "wormy-6fb3a.firebaseapp.com",
  projectId: "wormy-6fb3a",
  storageBucket: "wormy-6fb3a.appspot.com",
  messagingSenderId: "1017964239809",
  appId: "1:1017964239809:web:97f7ceaec427317a51ad40",
  measurementId: "G-FWMN4MD6H1",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
