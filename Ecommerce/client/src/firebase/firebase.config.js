// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkSXUKwNVdNrrmfAQUV02HFHNKIpvCRjo",
  authDomain: "loginhexashop.firebaseapp.com",
  projectId: "loginhexashop",
  storageBucket: "loginhexashop.appspot.com",
  messagingSenderId: "807426643985",
  appId: "1:807426643985:web:cefbd6ad60cc6aebe939b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app