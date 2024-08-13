"use client"
import { useContext, createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const router = useRouter();
	const pathname = usePathname();

    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
    const registerInWithEmailAndPassword = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginInWithEmailAndPassword = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
    const logOut = () => user ? signOut(auth) : null;


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("user", currentUser)
            if(currentUser==null){
                //colocar aviso de que no poseo un usuario actualmente
                router.push("/");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ signInWithGoogle, registerInWithEmailAndPassword, loginInWithEmailAndPassword, logOut, router, pathname, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}