// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy29W78bziCiiisYtwZxgXxknKl7PAA3g",
  authDomain: "gymate-9dea5.firebaseapp.com",
  projectId: "gymate-9dea5",
  storageBucket: "gymate-9dea5.appspot.com",
  messagingSenderId: "491760518077",
  appId: "1:491760518077:web:19709cb1ce16573eb208d4",
  measurementId: "G-W922GEXSZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
