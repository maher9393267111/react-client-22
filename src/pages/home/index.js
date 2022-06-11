import React, { useState, useEffect, useRef } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "redux";
import axios from "axios";

import {
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

import { useAuth } from "../../context/AuthContext";
//import { sendEmailVerification } from 'firebase/auth';

const Register = ({ history }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailresetRef = useRef();
  const nameRef = useRef();

  const [isRegister, setIsRegister] = useState(false);
  const {
    modal,
    setModal,
    signUp,
    login,
    loginWithGoogle,
    setAlert,
    setLoading,
    currentUser,
    sendemailLink,
    sendResetPasswordEmailfunc,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    console.log(email, password, name);

    await signUp(email, password, name);
  };




  // send emael link

  const handleSendEmailLink = async (e) => {
    e.preventDefault();

    const email = emailresetRef.current.value;
    console.log(window.location.href);


    const config = {
      url: window.location.href,
      handleCodeInApp: true,
    };




    sendSignInLinkToEmail(auth, email,config )
      // .then((result) => {
      //   console.log("Login result.user:",result );
      // })
      // .catch((error) => {
      //   console.log("SigninWithEmailLink ERROR:",);
      // });
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const data = await loginWithGoogle();
      console.log("google login data", data.user.email);

      try {
        // const response = await axios.post('/api/users/signin', {
        //   email: data.user.email,
        // });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = emailresetRef.current.value;
    sendResetPasswordEmailfunc(email)
      .then((res) => {
        console.log("reset password email sent", res);
      })
      .catch((err) => {
        console.log("reset password email error", err);
      });
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>

          <div>
            <h1>name</h1>
            <input type="text" ref={nameRef} />
          </div>

          <div>
            <h1>email</h1>
            <input type="email" ref={emailRef} />
          </div>

          <div>
            <h1>password</h1>
            <input type="password" ref={passwordRef} />
          </div>

          <button onClick={handleSubmit}> register</button>

          <div>
            <button onClick={handleGoogleSignIn}>login google</button>
          </div>

          <div>
            <h1>send link to email</h1>

            <div>
              <h1>email</h1>
              <input type="email" ref={emailresetRef} />
            </div>

            <button onClick={handleSendEmailLink}>send link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
