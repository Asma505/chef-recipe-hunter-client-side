import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);

    // For Google Sign in

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);        
    }

    // For Git Hub sign in
    const githubSignIn = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    // To Create User
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For username and password sign in
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // For logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // for state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        githubSignIn,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;