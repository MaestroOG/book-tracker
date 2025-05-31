import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";


const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user || null);
        })

        return () => unsubscribe()
    }, [])

    const signUpWithEmailPass = async (email, password) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        return user
    }

    const signInWithEmailPass = async (email, password) => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    }

    const signOut = async () => {
        await firebaseSignOut(auth)
    }
    return (
        <FirebaseContext.Provider value={{ signUpWithEmailPass, user, signInWithEmailPass, signOut }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider