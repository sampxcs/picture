import { useCallback, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from '../firebase/client'

initializeApp(firebaseConfig)

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  const auth = getAuth()

  const onStateChanged = useCallback((onChange) => {
    return auth.onAuthStateChanged((user) => {
      console.log(user)
      onChange(user)
    })
  })

  useEffect(() => {
    onStateChanged((user) => setUser(user))
  }, [])

  const createUserWithEmail = useCallback(({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
  })

  const signInWithEmail = useCallback(({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setUser(user)
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  })

  const logout = useCallback(() => {
    setUser(null)
    window.location.reload()
  }, [setUser])

  return { user, createUserWithEmail, signInWithEmail, onStateChanged, logout }
}
