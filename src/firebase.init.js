// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9gwN56CZVf8HqO8SCUs-c1156xHNo1Sg",
  authDomain: "email-password-auth2-2ddae.firebaseapp.com",
  projectId: "email-password-auth2-2ddae",
  storageBucket: "email-password-auth2-2ddae.firebasestorage.app",
  messagingSenderId: "110586468995",
  appId: "1:110586468995:web:835801bfe56247502019b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
