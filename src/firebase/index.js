
import { initializeApp,getApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
//import firebase from "firebase/app";
const firebaseConfig =  initializeApp({
    apiKey: "AIzaSyC4qfODc1T-EIDV3JL-DsQ_nBuNWr0ne5A",
    authDomain: "react-auth-da2f5.firebaseapp.com",
    projectId: "react-auth-da2f5",
    storageBucket: "react-auth-da2f5.appspot.com",
    messagingSenderId: "622489962584",
    appId: "1:622489962584:web:f911abf1b8c1b7b49ea22d"
});


let firebaseApp;
try {
    firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}




// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
export const app = firebaseApp
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();





// Initialize Firebase
// const db = firebaseConfig.firestore()

// const auth = firebase.auth()

// const storage = firebase.storage();
// export { db, auth,storage }