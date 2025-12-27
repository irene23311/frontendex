// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE3uvaNGeLJB_oLRkZpnJ6wqMGkaY6xa8",
  authDomain: "frontendex.firebaseapp.com",
  projectId: "frontendex",
  storageBucket: "frontendex.firebasestorage.app",
  messagingSenderId: "508788100092",
  appId: "1:508788100092:web:a011960d40e55fa162c079",
  measurementId: "G-JRZXGWE6Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);