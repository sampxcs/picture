import { useCallback, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useLocation } from 'wouter'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, addDoc, getDocs, deleteDoc, collection, setDoc } from 'firebase/firestore'
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
  // const { loading, error, setLoading, setError } = useStates()
  const [, pushLocation] = useLocation()
  const auth = getAuth()

  useEffect(() => {
    onStateChanged((userDoc) => {
      getSavedPexels(userDoc.uid).then((savedPexels) => {
        getProfileInfo(userDoc.uid).then((profileInfo) => {
          const user = { userImpL: userDoc, savedPexels: savedPexels, profileInfo: profileInfo }
          setUser(user)
          console.log(user)
        })
      })
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
        pushLocation('./')
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
        // An error happened.
      })
  }, [])

  const savePexel = useCallback(async ({ userId, pexelId, src, alt, photographer, photographer_url, avg_color }) => {
    try {
      const docRef = await setDoc(doc(db, 'saved', pexelId.toString()), {
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
      const querySnapshot = await getDocs(collection(db, 'saved'))
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
    async ({ user, displayName, email, bio, phoneNumber, location, website, linkedin, twitter, instagram, facebook }) => {
      try {
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            console.log('name si')
          })
          .catch((e) => {
            console.log(e)
          })
        updateEmail(user, email)
          .then(() => console.log('email si'))
          .catch((e) => {
            console.log(e)
          })
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
      } catch (e) {
        console.error('Error adding document: ', e)
      }
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
