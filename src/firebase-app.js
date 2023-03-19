// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0biQSmgndDKc7Zg91XzWLeK6SvWtPEYk",
  authDomain: "elearning-434d2.firebaseapp.com",
  projectId: "elearning-434d2",
  storageBucket: "elearning-434d2.appspot.com",
  messagingSenderId: "980065181232",
  appId: "1:980065181232:web:81e7ab5131dbedd7a117f5",
  measurementId: "G-DCR23WJX6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);