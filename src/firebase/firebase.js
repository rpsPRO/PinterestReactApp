// Import the functions you need from the SDKs you need
import { getAuth,
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile, 
    sendPasswordResetEmail
  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRapt3z6aduiDEl0CPaxpb7E_HJEFrDNg",
  authDomain: "pinterestreactweb.firebaseapp.com",
  projectId: "pinterestreactweb",
  storageBucket: "pinterestreactweb.appspot.com",
  messagingSenderId: "779036945027",
  appId: "1:779036945027:web:e4f1264a145b20f42609b6",
  measurementId: "G-0L39PZ1LK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const register = (email, password) => {
  return createUserWithEmailAndPassword (auth, email, password);
}

export const updateName = (userData) => {
  return updateProfile(auth.currentUser, userData);
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
}

export const logout = () => {
  return signOut(auth);
}
