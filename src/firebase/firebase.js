// Import the functions you need from the SDKs you need
import { getAuth,
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile, 
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider 
  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

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

export const singInGoogle = () => {
  signInWithPopup(auth, providerGoogle)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const singInFacebook = () => {
  signInWithPopup(auth, providerFacebook)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}

