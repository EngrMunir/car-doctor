// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2o4pE3j4g5V9flJKVhvVJinqkVRHIZlM",
  authDomain: "cars-doctor-45d7e.firebaseapp.com",
  projectId: "cars-doctor-45d7e",
  storageBucket: "cars-doctor-45d7e.appspot.com",
  messagingSenderId: "788696995214",
  appId: "1:788696995214:web:8c64a18d878df054d840df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;