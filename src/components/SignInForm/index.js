import React, { useEffect, useState } from 'react'
import './style.css'

import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

import useUser from '../../hooks/useUser'

import ButtonPrimary from '../ButtonPrimary'
import Spinner from '../Spinner'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [googleError, setGooglebError] = useState()
  const [gitHubError, setGitHubError] = useState()
  const [loading, setLoading] = useState(false)
  const [, pushLocation] = useLocation()
  const { user, signInWithEmail, signInWithGoogle, signInWithGitHub } = useUser()

  useEffect(() => {
    user && pushLocation('./')
  }, [user])

  const onChangeEmail = (e) => {
    setEmailError('')
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPasswordError('')
    setPassword(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setEmailError('')
    setPasswordError('')
    if (email.length) {
      if (password.length) {
        signInWithEmail({ email: email, password: password })
          .then((result) => {
            console.log(result)
            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
            console.dir(error)
            error.message === 'auth/user-not-found' && setEmailError('User email not found')
            error.message === 'auth/wrong-password' && setPasswordError('Wrong password')
          })
      } else {
        setLoading(false)
        setPasswordError('This field is required')
      }
    } else {
      setLoading(false)
      setEmailError('This field is required')
    }
  }

  const handelSubmitWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        console.log('si')
      })
      .catch((error) => {
        error.message === 'auth/account-exists-with-different-credential' &&
          setGooglebError('Auth/account exists with different credential')
      })
  }

  const handelSubmitWithGitHub = () => {
    signInWithGitHub()
      .then(() => {
        console.log('si')
      })
      .catch((error) => {
        error.message === 'auth/account-exists-with-different-credential' && setGitHubError('Auth/account exists with different credential')
      })
  }

  return (
    <form className="login-form" onSubmit={handelSubmit}>
      <h2>Welcome Back</h2>
      <h3>Log in to Picture to access your collections.</h3>
      <input
        className={emailError && 'input-error'}
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => onChangeEmail(e)}
      />
      {emailError && <small>{emailError}</small>}
      <input
        className={passwordError && 'input-error'}
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => onChangePassword(e)}
      />
      {passwordError && <small>{passwordError}</small>}
      <Link to="/reset-password">Forgot your password?</Link>
      <ButtonPrimary type="submit" disabled={!email || !password}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            Sing In
            <FontAwesomeIcon className="faArrow" icon={faArrowRightToBracket} />
          </>
        )}
      </ButtonPrimary>
      <p>Or continue with</p>
      <ButtonPrimary type="button" onClick={handelSubmitWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        Google
      </ButtonPrimary>
      {googleError && <small>{googleError}</small>}
      <ButtonPrimary type="button" onClick={handelSubmitWithGitHub}>
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </ButtonPrimary>
      {gitHubError && <small>{gitHubError}</small>}
      <p>
        Don't have an account?, <Link to="/sign-up">Sign up and get started!</Link>
      </p>
    </form>
  )
}
