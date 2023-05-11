// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqAOdKU1roknhb-sfUn0hJZbIHtE7U7PM",
  authDomain: "chat-51582.firebaseapp.com",
  projectId: "chat-51582",
  storageBucket: "chat-51582.appspot.com",
  messagingSenderId: "553412247939",
  appId: "1:553412247939:web:8a22e45b6fc734b8d836b6",
  measurementId: "G-Q732V8YD8L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
