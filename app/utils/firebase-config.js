// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3z1rcFB-t3UlKjwuQFUrtAfBIjQyvUVM",
  authDomain: "cash-flow8.firebaseapp.com",
  projectId: "cash-flow8",
  storageBucket: "cash-flow8.appspot.com",
  messagingSenderId: "344257712336",
  appId: "1:344257712336:web:16c968cccbe29d0a4a0ed5",
  measurementId: "G-GRX6ZTN2J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)