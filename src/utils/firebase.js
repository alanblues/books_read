import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZFs3MHriMup6d5Rnt3o2OrHjUpH5RXOs",
  authDomain: "books-read-e9b9b.firebaseapp.com",
  databaseURL: "https://books-read-e9b9b-default-rtdb.firebaseio.com",
  projectId: "books-read-e9b9b",
  storageBucket: "books-read-e9b9b.appspot.com",
  messagingSenderId: "508357986549",
  appId: "1:508357986549:web:457e66cd12bda3e1b3ddbc"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default { firebase, db };