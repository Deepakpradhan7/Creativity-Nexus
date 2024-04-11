// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1f50c.firebaseapp.com",
  projectId: "blog-1f50c",
  storageBucket: "blog-1f50c.appspot.com",
  messagingSenderId: "293499344171",
  appId: "1:293499344171:web:f69ae84a644a9cd0da216e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);