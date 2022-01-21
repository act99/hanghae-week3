// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl29lA1nxN4KuNKnGzAUStT0FjAO6sg0s",
  authDomain: "sparta-w1-diary.firebaseapp.com",
  projectId: "sparta-w1-diary",
  storageBucket: "sparta-w1-diary.appspot.com",
  messagingSenderId: "26862417413",
  appId: "1:26862417413:web:c6db67a4306f8fe24b8e6c",
  measurementId: "G-MBWYB0XDSX",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
