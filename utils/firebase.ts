// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQJqz141pfKAayuys1afb7euuQkuow_WY",
  authDomain: "resihub-email-tracker.firebaseapp.com",
  projectId: "resihub-email-tracker",
  storageBucket: "resihub-email-tracker.firebasestorage.app",
  messagingSenderId: "816579583825",
  appId: "1:816579583825:web:dfbf478a641ba8fa72fd70",
  measurementId: "G-KDGFJ61CG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
let analytics;
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
    } else {
      console.log("Firebase Analytics is not supported in this environment");
    }
  })
  .catch((error) => {
    console.error("Error checking analytics support:", error);
  });


const db = getFirestore(app);

export default db;