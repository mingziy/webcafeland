// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlLEXb59VKcuOyLlVicF3gZgH9jjdOVfQ",
  authDomain: "webcafelanding-mingzi.firebaseapp.com",
  projectId: "webcafelanding-mingzi",
  storageBucket: "webcafelanding-mingzi.firebasestorage.app",
  messagingSenderId: "24660014635",
  appId: "1:24660014635:web:5609079d187852782a5c6e",
  measurementId: "G-8KTZPTT17N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);