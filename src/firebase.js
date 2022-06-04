// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASxmt6apS1spUCSX0FgDxQyP4omPwTV4g",
  authDomain: "social-connect-d9b8b.firebaseapp.com",
  projectId: "social-connect-d9b8b",
  storageBucket: "social-connect-d9b8b.appspot.com",
  messagingSenderId: "505165975878",
  appId: "1:505165975878:web:e4dfea171fd2217980d547",
  measurementId: "G-F2KW6DNQPX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
