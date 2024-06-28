
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJhm2nMf9-KC3AsMUaL1EQe1zXEwn9N9k",
  authDomain: "clone-by-shalini.firebaseapp.com",
  projectId: "clone-by-shalini",
  storageBucket: "clone-by-shalini.appspot.com",
  messagingSenderId: "487932005848",
  appId: "1:487932005848:web:439e1d6b6e9c4dd72b36ad",
  measurementId: "G-V7FB7X64VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);