// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC94T9ypeKH57JdaFsKPsEPvw7h8DwZ9v0",
  authDomain: "photo-tagging-app-d5d12.firebaseapp.com",
  projectId: "photo-tagging-app-d5d12",
  storageBucket: "photo-tagging-app-d5d12.appspot.com",
  messagingSenderId: "677893456099",
  appId: "1:677893456099:web:cb4762fcde61d2dd3545d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { app, db };
