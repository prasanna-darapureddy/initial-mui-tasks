
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuDEuBLD6UDSJFcjdyqKiGFcDwBZmyFeA",
  authDomain: "login-practice-2e2c3.firebaseapp.com",
  projectId: "login-practice-2e2c3",
  storageBucket: "login-practice-2e2c3.appspot.com",
  messagingSenderId: "76121047335",
  appId: "1:76121047335:web:fac418cf7c67f7c2f0e902",
  measurementId: "G-7T0K1ZN4LD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();