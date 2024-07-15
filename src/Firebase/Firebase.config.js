// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChZVJX_laudapZny4SFeO_h7rFbInuL7I",
  authDomain: "hero-rider-4d9c5.firebaseapp.com",
  databaseURL: "https://hero-rider-4d9c5-default-rtdb.firebaseio.com",
  projectId: "hero-rider-4d9c5",
  storageBucket: "hero-rider-4d9c5.appspot.com",
  messagingSenderId: "80930753787",
  appId: "1:80930753787:web:f63d1c91100b932c7a345e",
  measurementId: "G-MNWZWJ60FS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
