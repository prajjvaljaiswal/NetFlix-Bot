// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIp0Yz0XjnCrVCVR11KpdK1n9uogAIafc",
  authDomain: "netflixgpt-by-prajjval.firebaseapp.com",
  projectId: "netflixgpt-by-prajjval",
  storageBucket: "netflixgpt-by-prajjval.appspot.com",
  messagingSenderId: "253447586988",
  appId: "1:253447586988:web:491b719c5ab4166f63cb09",
  measurementId: "G-H30VVDRH59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();