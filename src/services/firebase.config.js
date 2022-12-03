import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyACqdCRycHphi6pheF3z0Zr2c6Sv9-0ugI",
    authDomain: "mama-marketplace.firebaseapp.com",
    projectId: "mama-marketplace",
    storageBucket: "mama-marketplace.appspot.com",
    messagingSenderId: "520646973746",
    appId: "1:520646973746:web:a95abaeca07096e9b25f2b",
    measurementId: "G-20WTJXTY0J"
});

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { db, auth, analytics, storage };