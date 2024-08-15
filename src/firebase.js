// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NODE_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-59d2e.firebaseapp.com",
  projectId: "insta-next-59d2e",
  storageBucket: "insta-next-59d2e.appspot.com",
  messagingSenderId: "717041772818",
  appId: "1:717041772818:web:ecf6933f217506fb716bcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// rules_version = "2";

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if
//       request.resource.size < 2 *1024 *1024 &&
//       request.resource.contentType.matches('image/.*');
//     }
//   }
// }
