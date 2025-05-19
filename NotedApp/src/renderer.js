// renderer.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJBhq5z_RfteMOz2z1iXcj0Uq2URPwnWk",
  authDomain: "notedfirebase.firebaseapp.com",
  projectId: "notedfirebase",
  storageBucket: "notedfirebase.firebasestorage.app",
  messagingSenderId: "542456717235",
  appId: "1:542456717235:web:907a31457381b25205f5c6",
  measurementId: "G-1Q7EVR2JPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Now you can use auth, db, etc.
