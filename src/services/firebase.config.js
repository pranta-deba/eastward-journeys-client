import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBocuQjFIIa8hB09uIrhX2A5MTSJycPNnY",
  authDomain: "eastwards-3f3d4.firebaseapp.com",
  projectId: "eastwards-3f3d4",
  storageBucket: "eastwards-3f3d4.appspot.com",
  messagingSenderId: "81949750667",
  appId: "1:81949750667:web:9b4f305477cf5b8715eb8e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);