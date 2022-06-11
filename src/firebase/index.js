
import { initializeApp,getApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
//import firebase from "firebase/app";
const firebaseConfig =  initializeApp({
   
  apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
  authDomain: "social-c7db0.firebaseapp.com",
  projectId: "social-c7db0",
  storageBucket: "social-c7db0.appspot.com",
  messagingSenderId: "782857857583",
  appId: "1:782857857583:web:e080621d0ffb1776d6b4da"
});


let firebaseApp;
try {
    firebaseApp = getApp();
    console.log(
        'firebaseApp',
    )
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
  console.log('firebaseApp', firebaseApp);
}



// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
export const app = firebaseApp
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();





// socil-------

// apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
// authDomain: "social-c7db0.firebaseapp.com",
// projectId: "social-c7db0",
// storageBucket: "social-c7db0.appspot.com",
// messagingSenderId: "782857857583",
// appId: "1:782857857583:web:e080621d0ffb1776d6b4da"




//-----------------------------------------------------






// apiKey: "AIzaSyBeuDqtel2Vhwn0oGphyuFYbgvrE6FJQgQ",
// authDomain: "mern-projec.firebaseapp.com",
// databaseURL: "https://mern-projec-default-rtdb.firebaseio.com",
// projectId: "mern-projec",
// storageBucket: "mern-projec.appspot.com",
// messagingSenderId: "760297962433",
// appId: "1:760297962433:web:80adf7f5d905f76ace8d40"




// apiKey: "AIzaSyC4qfODc1T-EIDV3JL-DsQ_nBuNWr0ne5A",
// authDomain: "react-auth-da2f5.firebaseapp.com",
// projectId: "react-auth-da2f5",
// storageBucket: "react-auth-da2f5.appspot.com",
// messagingSenderId: "622489962584",
// appId: "1:622489962584:web:f911abf1b8c1b7b49ea22d"