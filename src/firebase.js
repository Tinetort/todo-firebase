// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlrytI4DjPWv9WAW07F3ygO6oMvAfwp-s",
  authDomain: "todo-app-3e7a9.firebaseapp.com",
  projectId: "todo-app-3e7a9",
  storageBucket: "todo-app-3e7a9.appspot.com",
  messagingSenderId: "319994894315",
  appId: "1:319994894315:web:637d76be7162b40f1babae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)