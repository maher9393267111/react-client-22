
import firebase from 'firebase'

const firebaseConfig =  firebase.initializeApp({
    apiKey: "AIzaSyC4qfODc1T-EIDV3JL-DsQ_nBuNWr0ne5A",
    authDomain: "react-auth-da2f5.firebaseapp.com",
    projectId: "react-auth-da2f5",
    storageBucket: "react-auth-da2f5.appspot.com",
    messagingSenderId: "622489962584",
    appId: "1:622489962584:web:f911abf1b8c1b7b49ea22d"
});

// Initialize Firebase
const db = firebaseConfig.firestore()

const auth = firebase.auth()

const storage = firebase.storage();
export { db, auth,storage }