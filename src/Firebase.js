import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgQUpM8QW8SVimE1Xg3__kEjDVZRUrMF0",
  authDomain: "ecommercestore-8070b.firebaseapp.com",
  databaseURL: "https://ecommercestore-8070b-default-rtdb.firebaseio.com",
  projectId: "ecommercestore-8070b",
  storageBucket: "ecommercestore-8070b.appspot.com",
  messagingSenderId: "512535646103",
  appId: "1:512535646103:web:a13cf3a0cf9d8321f63ed2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
