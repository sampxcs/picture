import { useCallback, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useLocation } from 'wouter'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, addDoc, deleteDoc, collection } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { firebaseConfig } from '../firebase/client'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage()

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  const [location, pushLocation] = useLocation()
  const auth = getAuth()

  useEffect(() => {
    onStateChanged((user) => setUser(user))
  }, [])

  const onStateChanged = useCallback((onChange) => {
    return auth.onAuthStateChanged((user) => {
      onChange(user)
    })
  }, [])

  const createUserWithEmail = useCallback(({ firstname, lastname, email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        updateProfile(user, {
          displayName: `${firstname} ${lastname ? lastname : ''}`,
        }).then(() => {
          sendEmailVerification(user).then(() => {
            console.log('email verification')
            setUser(user)
            console.log(user)
          })
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
  }, [])

  const signInWithEmail = useCallback(({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setUser(user)
        window.location.reload()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }, [])

  const signInWithGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }, [])
  const signInWithGitHub = useCallback(() => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        console.log(errorMessage)
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }, [])

  const resetPassword = useCallback(({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
  }, [])

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        pushLocation('./')
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
        // An error happened.
      })
  }, [])

  const savePexel = useCallback(async ({ userId, pexelId }) => {
    try {
      const docRef = await addDoc(collection(db, 'saved'), {
        userId: userId,
        pexelId: pexelId,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.log('Error adding document: ', e)
    }
  }, [])

  const deleteSavedPexel = useCallback(async () => {
    await deleteDoc(doc(db, 'saved', 'DC'))
  }, [])

  const uploadImage = useCallback(({ img }) => {
    const storageRef = ref(storage, img.name)
    return uploadBytes(storageRef, img).then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((downloadURL) => downloadURL)
    })
  }, [])

  return {
    user,
    createUserWithEmail,
    signInWithEmail,
    updateProfile,
    signInWithGitHub,
    signInWithGoogle,
    logout,
    resetPassword,
    savePexel,
    uploadImage,
  }
}
