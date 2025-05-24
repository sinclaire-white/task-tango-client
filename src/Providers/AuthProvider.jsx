import React from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
      
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
 const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


      const userInfo = {
        createUser,
        loginUser,
        signInWithGoogle
        }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;