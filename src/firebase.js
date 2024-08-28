// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NODE_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "insta-next-59d2e.firebaseapp.com",
//   projectId: "insta-next-59d2e",
//   storageBucket: "insta-next-59d2e.appspot.com",
//   messagingSenderId: "717041772818",
//   appId: "1:717041772818:web:ecf6933f217506fb716bcb",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NODE_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-89610.firebaseapp.com",
  projectId: "insta-next-89610",
  storageBucket: "insta-next-89610.appspot.com",
  messagingSenderId: "458827317846",
  appId: "1:458827317846:web:c228bec3830bd00b4771f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
