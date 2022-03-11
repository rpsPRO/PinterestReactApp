// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
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
  measurementId: "G-0L39PZ1LK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 const auth = getAuth();

const db = getFirestore();
const storage = getStorage();

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateName = (userData) => {
  return updateProfile(auth.currentUser, userData);
};

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

const logout = () => {
  return signOut(auth);
};

const singInGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const singInFacebook = () => {
  console.log("Sign in Facebook");
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log("Estoy en el then");
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(accessToken);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("Estoy en el catch");
      // ...
    });
};

const uploadImage = (image) => {
  const storage = getStorage();
  const imageRef = ref(storage, `/images/${image.name}`);
  return uploadBytes(imageRef, image);
}

const addPost = (post) => {
      return addDoc(collection(db, "pinterest"), post);
}

const getPosts = (listener) => {
  return onSnapshot(collection(db, "pinterest"), listener);
};

const getImageUrl = async (imageName) => {
  try {
    return await getDownloadURL(ref(storage, "images/" + imageName));
  } catch (err) {
    return "Error al intentar descargar la url de la imagen";
  }
};

const deletePostById = async (id) => {
  const postRef = doc(db, "pinterest", id);
  const postDoc = await getDoc(postRef);
  const post = postDoc.data();
  await deleteDoc(postRef);
  const imageRef = ref(storage, "images/" + post.image);
  await deleteObject(imageRef);
};

export {auth, login, updateName, register, logout, resetPassword, uploadImage, addPost, getPosts, getImageUrl, deletePostById, singInGoogle, singInFacebook};
