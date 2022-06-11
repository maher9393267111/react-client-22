import React, { useState, useEffect,useRef } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "redux";
import { sendEmailVerification } from 'firebase/auth';

import { useAuth } from '../../context/AuthContext';
//import { sendEmailVerification } from 'firebase/auth';

const Register = ({ history }) => {
  
    const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isRegister, setIsRegister] = useState(false);
  const {
    modal,
    setModal,
    signUp,
    login,
    loginWithGoogle,
    setAlert,
    setLoading,
    currentUser
  } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    await signUp(email, password);
    console.log('current auth user', currentUser)

  }





  return (
    <div className="container p-5">

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          

<div>
    <h1>email</h1>
    <input type="email" ref ={emailRef} />
</div>



<div>

<h1>password</h1>
<input type="password" ref= {passwordRef} />

</div>


<button
onClick={handleSubmit}

> register</button>



        </div>
      </div>
    </div>
  );
};

export default Register;