// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmpDOL8U7VB2gnmN3daYFoaSveAwpi5AA",
  authDomain: "bistro-boss-aff0a.firebaseapp.com",
  projectId: "bistro-boss-aff0a",
  storageBucket: "bistro-boss-aff0a.appspot.com",
  messagingSenderId: "37192544825",
  appId: "1:37192544825:web:42f71040c1f595244ad3e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;