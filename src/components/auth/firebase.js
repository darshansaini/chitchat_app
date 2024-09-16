

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIhoiDlJ1zicXm6q-uUGQxb0ubwa7s8sQ",
    authDomain: "fir-demo-e5957.firebaseapp.com",
    projectId: "fir-demo-e5957",
    storageBucket: "fir-demo-e5957.appspot.com",
    messagingSenderId: "528632678608",
    appId: "1:528632678608:web:440a4a4d87eb26be2376d5",
    measurementId: "G-WDQC0FPZPC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in
//         db.collection("chitchatCollection").add({
//             uid: user.uid,
//             userAgent: navigator.userAgent,
//             language: navigator.language,
//             platform: navigator.platform
//         });
//     }
// });

export {
    auth,
    db,
    googleProvider,
    facebookProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};


