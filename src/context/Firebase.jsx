import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../utils/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";


const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

const googleProvider = new GoogleAuthProvider()

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user || null);
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signUpWithEmailPass = async (email, password) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)

        await setDoc(doc(firestore, 'users', user.user.uid), {
            uid: user.user.uid,
            email: user.user.email,
            createdAt: new Date()
        })

        return user
    }

    const signInWithEmailPass = async (email, password) => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    }

    const signOut = async () => {
        await firebaseSignOut(auth)
    }

    const signUpWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userRef = doc(firestore, 'users', user?.uid);

            const snapshot = await getDoc(userRef);

            if (!snapshot.exists()) {
                await setDoc(userRef, {
                    uid: user?.uid,
                    name: user?.displayName || "",
                    email: user?.email,
                    createdAt: new Date()
                })
            }

            return user;
        } catch (error) {
            alert(error?.message)
        }
    }

    // Book CRUD Functions

    const addBookForUser = async (userID, bookData) => {
        const userBooksRef = collection(firestore, 'users', userID, 'books');
        await addDoc(userBooksRef, {
            ...bookData,
            createdAt: new Date()
        })
    }
    return (
        <FirebaseContext.Provider value={{ signUpWithEmailPass, user, signInWithEmailPass, signOut, signUpWithGoogle, addBookForUser }}>
            {loading ? <div className="h-screen w-full flex items-center justify-center">Loading...</div> : children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider