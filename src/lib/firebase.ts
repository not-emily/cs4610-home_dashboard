// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9mhGhX7XmhYk2c32gGnNbLJVdwbzU2rg",
  authDomain: "react-home-dashboard.firebaseapp.com",
  projectId: "react-home-dashboard",
  storageBucket: "react-home-dashboard.appspot.com",
  messagingSenderId: "1043759629603",
  appId: "1:1043759629603:web:e5c9b3c9e1928849f5b896"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);