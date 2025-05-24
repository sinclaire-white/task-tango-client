// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtfty1b_jV6NBttvyVEoyPqRp6TLH7rlE",
  authDomain: "task-tango-web.firebaseapp.com",
  projectId: "task-tango-web",
  storageBucket: "task-tango-web.firebasestorage.app",
  messagingSenderId: "600608308049",
  appId: "1:600608308049:web:a08404dd1a80ea2e673170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);