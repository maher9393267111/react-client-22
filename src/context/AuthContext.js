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
  import { auth } from '../firebase/index';
  
  const authContext = createContext();
  
  export const useAuth = () => {
    return useContext(authContext);
  };
  
  const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [modal, setModal] = useState({ isOpen: false, title: '', content: '' });
    const [alert, setAlert] = useState({
      isAlert: false,
      severity: 'info',
      message: '',
      timeout: null,
      location: '',
    });
    const [loading, setLoading] = useState(false);
  
    const signUp = (email, password,name,imageUrl) => {
     return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      updateProfile(userCredential.user, {
        displayName: name,
        photoURL: imageUrl ? imageUrl : '',
      });
    })
    .catch((error) => console.log(error.message));

    
    };
    const login = (email, password,name) => {
      return signInWithEmailAndPassword(auth, email, password) 
    };
    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    };
    const logout = () => {
      return signOut(auth);
    };
  
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };
  

    // send reset password email
    const sendResetPasswordEmailfunc = (email) => {
      return sendPasswordResetEmail(auth, email,{url:'http://localhost:3000'});
    
    }
  
    // send link to email
    const sendemailLink = (email) => {
      console.log('send email link', email)
        return sendSignInLinkToEmail(auth, email, {
            url: 'http://localhost:3000/register/complete',
            handleCodeInApp: true,
        }).then((result) => {
            console.log('send email link result', result)
        }
        ).catch((error) => {
            console.log('send email link error', error)
        }
        );
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        console.log('user status changed: ', user);
      });
      return unsubscribe;
    }, []);
  
    const value = {
      currentUser,
      signUp,
      login,
      logout,
      modal,
      setModal,
      loginWithGoogle,
      alert,
      setAlert,
      loading,
      setLoading,
      resetPassword,
      sendemailLink,
      sendResetPasswordEmailfunc
    };
    return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
  };
  
  export default AuthContext;