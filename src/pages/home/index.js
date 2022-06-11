import React from 'react'
import firebase from 'firebase'


import { auth } from '../../firebase/index'
// import { Button } from '@material-ui'
// 

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)

        // find current user data in firebase
        const useer = auth.currentUser
        console.log(useer.displayName)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignIn