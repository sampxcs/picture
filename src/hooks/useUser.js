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

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage()

const STATUS_CODES = {
  UNDEFINED: 0,
  LOADING: 1,
  OK: 2,
  NULL: 3,
}

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  const [userStatusCode, setUserStatusCode] = useState(STATUS_CODES.UNDEFINED)
  const auth = getAuth()

  useEffect(() => {
    setUserStatusCode(STATUS_CODES.LOADING)
    onStateChanged((userDoc) => {
      if (userDoc) {
        getSavedPexels(userDoc.uid).then((savedPexels) => {
          getProfileInfo(userDoc.uid).then((profileInfo) => {
            setUserStatusCode(STATUS_CODES.OK)
            const user = { userImpL: userDoc, savedPexels: savedPexels, profileInfo: profileInfo || {} }
            setUser(user)
          })
        })
      } else {
        setUserStatusCode(STATUS_CODES.NULL)
      }
    })
  }, [])

  const onStateChanged = useCallback((onChange) => {
    return auth.onAuthStateChanged((user) => {
      onChange(user)
    })
  }, [])

  const createUserWithEmail = useCallback(({ firstname, lastname, email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
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
        throw new Error(error.code)
      })
  }, [])

  const signInWithEmail = useCallback(({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setUser(user)
        window.location.reload()
        // ...
      })
      .catch((error) => {
        throw new Error(error.code)
      })
  }, [])

  const signInWithGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])
  const signInWithGitHub = useCallback(() => {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        throw new Error(error.code)
      })
  }, [])

  const resetPassword = useCallback(({ email }) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        throw new Error(error.code)
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
    await deleteDoc(doc(db, 'savedPexels', id))
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
    userStatusCode,
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
