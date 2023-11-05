import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setIsLoading(false);
            console.log(currentUser);
        })
        return()=>{
            subscribe
        }
    }, [])

    const loginWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, photo) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };


    const authInfo = {
        user,
        isLoading,
        loginWithGoogle,
        createUser,
        loginUser,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;