import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendEmailVerification,
    sendSignInLinkToEmail,
    updateProfile,

  } from 'firebase/auth';

  import { doc, setDoc } from 'firebase/firestore';
  import { useState } from 'react';
  import { useEffect } from 'react';
  import { useContext } from 'react';
  import { createContext } from 'react';
  import { auth,db } from '../firebase/index';
  
  const authContext = createContext();
  
  export const useAuth = () => {
    return useContext(authContext);
  };
  
  const AuthContext = ({ children }) => {
    
  

    const [user, setUser] = useState({});

    const signUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      // set rules read and write if true
      // create  collection name is users --> doc name(id) is user gmail  ----> data is empty array wishlist
      return setDoc(doc(db, 'users', email), {
        watchList: [],
      });
    };
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = () => {
      return signOut(auth);
    };







   
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        console.log('user status changed: ', user);
      });
      return unsubscribe;
    }, []);
  
    const value = {
       signUp, signIn, logout, user
    };
    return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
  };
  
  export default AuthContext;