import { createContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [toggle,setToggle] = useState(false);
    const SignInWithGoogle = () =>{
        return signInWithPopup(auth,provider)
    };
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {})
        .catch(error =>
            alert(error.message)
        )
    };

    const signUpWithEmailPassword =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEmailPassword = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserInfo = (updateInfo) =>{
        return updateProfile(auth.currentUser,updateInfo);
    }
    const authInfo = {
        user,
        setUser,
        SignInWithGoogle,
        loading,
        setLoading,
        handleSignOut,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        updateUserInfo,
        toggle,
        setToggle,
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
            setUser(null);
        }
    },[])
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;