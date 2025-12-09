// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOLpXwDGPC4dwZasiLnnZMa1cwRVvj2rk",
  authDomain: "project-muralidhardon-e228e.firebaseapp.com",
  databaseURL: "https://project-muralidhardon-e228e-default-rtdb.firebaseio.com",
  projectId: "project-muralidhardon-e228e",
  storageBucket: "project-muralidhardon-e228e.firebasestorage.app",
  messagingSenderId: "705927237938",
  appId: "1:705927237938:web:e28a4aef44fab87d37072b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Realtime Database instance
export const db = getDatabase(app);
