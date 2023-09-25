import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVlHe5ZJrlblH_mJe1hnHgam7aTKcktW4",
  authDomain: "next-auth-8c76e.firebaseapp.com",
  projectId: "next-auth-8c76e",
  storageBucket: "next-auth-8c76e.appspot.com",
  messagingSenderId: "716875775316",
  appId: "1:716875775316:web:396031e3b0e6b5c33b9cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();