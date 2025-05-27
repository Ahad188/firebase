// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjvGV7sJs4UtcpoowZAkq4ANWY2NtBQEg",
  authDomain: "simple-firebase2-d655b.firebaseapp.com",
  projectId: "simple-firebase2-d655b",
  storageBucket: "simple-firebase2-d655b.firebasestorage.app",
  messagingSenderId: "802078785014",
  appId: "1:802078785014:web:b17da30e3b307c93fb9bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

