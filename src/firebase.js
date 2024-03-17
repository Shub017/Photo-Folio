// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATQGXBZLyuXh_-DlL8mM58I-leXiG1YFM",
  authDomain: "photo-folio-8858f.firebaseapp.com",
  projectId: "photo-folio-8858f",
  storageBucket: "photo-folio-8858f.appspot.com",
  messagingSenderId: "692371788545",
  appId: "1:692371788545:web:7ee2fbede9f5d336680100",
  measurementId: "G-T5YQ6WRVLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
