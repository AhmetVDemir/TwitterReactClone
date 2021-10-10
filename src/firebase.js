
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Database} from "firebase/database"
import Firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBQY_lGpSOSN1sWyfggcatlpUmLNNtPGNc",
  authDomain: "twitter-clone-ac95d.firebaseapp.com",
  projectId: "twitter-clone-ac95d",
  storageBucket: "twitter-clone-ac95d.appspot.com",
  messagingSenderId: "68714328780",
  appId: "1:68714328780:web:4a8bdd875b1bd0240d8869",
  measurementId: "G-XNX693HQDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

