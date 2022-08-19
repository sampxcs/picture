import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDocs, deleteDoc, collection, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { firebaseConfig } from '../firebase/client'
import useStates from './useStates'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage()

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  // const { loading, error, setLoading, setError } = useStates()
  const auth = getAuth()

  console.log(loading)

  useEffect(() => {
    setLoading(true)
    console.log('loading')
    onStateChanged((userDoc) => {
      if (userDoc) {
        console.log('Ready')
        getSavedPexels(userDoc.uid).then((savedPexels) => {
          console.log('saved pexels')
          getProfileInfo(userDoc.uid).then((profileInfo) => {
            setLoading(false)
            console.log('profile info')
            const user = { userImpL: userDoc, savedPexels: savedPexels, profileInfo: profileInfo || {} }
            setUser(user)
          })
        })
      }
    })
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
        // const errorCode = error.code
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
        // const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }, [])

  const signInWithGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.customData.email
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }, [])
  const signInWithGitHub = useCallback(() => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GithubAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        console.log(errorMessage)
        /// const email = error.customData.email
        // The AuthCredential type that was used.
        /// const credential = GoogleAuthProvider.credentialFromError(error)
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
        // const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
  }, [])

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        window.location.reload()
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
        // An error happened.
      })
  }, [])

  const savePexel = useCallback(async ({ userId, pexelId, src, alt, photographer, photographer_url, avg_color }) => {
    try {
      const docRef = await setDoc(doc(db, 'savedPexels', pexelId.toString()), {
        userId: userId,
        id: pexelId,
        src: src,
        alt: alt,
        photographer: photographer,
        photographer_url: photographer_url,
        avg_color: avg_color,
      })
      return docRef
    } catch (e) {
      console.log('Error adding document: ', e)
    }
  }, [])

  const getSavedPexels = useCallback(async (uid) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'savedPexels'))
      const savedPelexs = []
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === uid) savedPelexs.push(doc.data())
      })
      return savedPelexs
    } catch (e) {
      console.error(e)
    }
  }, [])

  const deleteSavedPexel = useCallback(async (id) => {
    await deleteDoc(doc(db, 'saved', id))
  }, [])

  const updateProfileInfo = useCallback(
    ({ user, displayName, email, bio, phoneNumber, location, website, linkedin, twitter, instagram, facebook }) => {
      return updateProfile(user, {
        displayName: displayName,
      })
        .then(() => {
          console.log('name si')
          return updateEmail(user, email)
        })
        .then(async () => {
          console.log('email si')
          const docRef = await setDoc(doc(db, 'profileInfo', user.uid), {
            uid: user.uid,
            displayName: displayName,
            email: email,
            bio: bio,
            location: location,
            phoneNumber: phoneNumber,
            website: website,
            linkedin: linkedin,
            twitter: twitter,
            instagram: instagram,
            facebook: facebook,
          })
          return docRef
        })
        .catch((e) => {
          throw new Error(e)
        })
    },
    []
  )
  const getProfileInfo = useCallback(async (uid) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'profileInfo'))
      let profileInfo
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === uid) {
          profileInfo = doc.data()
        }
      })
      return profileInfo
    } catch (e) {
      console.log(e)
    }
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
    updateProfileInfo,
    signInWithGitHub,
    signInWithGoogle,
    logout,
    resetPassword,
    savePexel,
    deleteSavedPexel,
    uploadImage,
  }
}
