import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);
    const [again, setAgain] = useState(false);
    const [themeMail, setThemeMail] = useState(localStorage.getItem('theme')||'');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserLoader(false);
            }
            else {
                setUser(null);
                setUserLoader(false);
            }
        })
        return () => unSubscribe();
    }, [again])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ createUser, googleSignIn,githubSignIn, signIn, logOut, user, userLoader, again, setAgain, themeMail, setThemeMail }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;