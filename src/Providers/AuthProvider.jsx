import React from 'react';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();



const [userData, setUserData] = useState(null);
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
        <span className="text-[#006A71] loading loading-spinner loading-lg"></span>
      </div>;
  }

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
        user,
         userData, 
        createUser,
        loginUser,
        signInWithGoogle,
        loading
        }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;