// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApeCE-AAeeq2sWCaZkcLx54GsCd85ZMTs",
    authDomain: "dialog-6fde2.firebaseapp.com",
    databaseURL: "https://dialog-6fde2-default-rtdb.firebaseio.com",
    projectId: "dialog-6fde2",
    storageBucket: "dialog-6fde2.appspot.com",
    messagingSenderId: "827719139318",
    appId: "1:827719139318:web:f0e875b61a6570303611d7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;