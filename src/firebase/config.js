// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvA7qcVEDH2YuqcCXlhY25QnH1bA-jWBE",
  authDomain: "journal-app-250f7.firebaseapp.com",
  projectId: "journal-app-250f7",
  storageBucket: "journal-app-250f7.appspot.com",
  messagingSenderId: "125774974771",
  appId: "1:125774974771:web:b95297ac8b85fdb57e7846",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
