import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "AIzaSyD0SrMvuFp8QenzvC4Yai_laKfsnNgT8KI", // Fallback mechanism
  authDomain: "chat-app-7d339.firebaseapp.com",
  projectId: "chat-app-7d339",
  storageBucket: "chat-app-7d339.appspot.com",
  messagingSenderId: "594616246721",
  appId: "1:594616246721:web:f9d54487f37ded12cd0f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
