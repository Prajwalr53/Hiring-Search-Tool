// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0vHok6m6fxzWc7W8xdp5Ha8LTULM0l58",
  authDomain: "online-job-2db57.firebaseapp.com",
  projectId: "online-job-2db57",
  storageBucket: "online-job-2db57.appspot.com",
  messagingSenderId: "375743922831",
  appId: "1:375743922831:web:242b287fcf4a07b7b0a6fa",
  measurementId: "G-093HX2MR26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};