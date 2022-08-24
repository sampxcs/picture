import React, { useState } from 'react'
import './style.css'

import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

import useUser from '../../hooks/useUser'

import ButtonPrimary from '../ButtonPrimary'
import Modal from '../Modal'
import VerificationEmailAlert from '../VerificationEmailAlert'
import Spinner from '../Spinner'

export default function SignUpForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [firstNameError, setFirstNameError] = useState()
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [googleError, setGooglebError] = useState()
  const [gitHubError, setGitHubError] = useState()
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const { user, createUserWithEmail, signInWithGoogle, signInWithGitHub } = useUser()

  const onChangeFirstName = (e) => {
    setFirstNameError('')
    setFirstname(e.target.value)
  }

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
    setFirstNameError('')
    setEmailError('')
    setPasswordError('')
    if (firstname.length) {
      if (email.length) {
        if (password.length) {
          createUserWithEmail({ firstname: firstname, lastname: lastname, email: email, password: password })
            .then((result) => {
              console.log(result)
              setLoading(false)
            })
            .catch((error) => {
              setLoading(false)
              console.dir(error)
              error.message === 'auth/email-already-in-use' && setEmailError('Email already in use')
              error.message === 'auth/invalid-email' && setEmailError('Invalid email')
              error.message === 'auth/weak-password' && setPasswordError('Weak password, password should be at least 6 characters')
            })
        } else {
          setLoading(false)
          setPasswordError('This field is required')
        }
      } else {
        setLoading(false)
        setEmailError('This field is required')
      }
    } else {
      setLoading(false)
      setFirstNameError('This field is required')
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
    <form className="sign-up-form" onSubmit={handelSubmit}>
      <h2>Welcome to Picture</h2>
      <h3>Download free photos and videos powered by a community of photographers.</h3>
      <div>
        <input
          className={firstNameError && 'input-error'}
          type="text"
          placeholder="First name"
          value={firstname}
          required
          onChange={(e) => onChangeFirstName(e)}
        />
        <input type="text" placeholder="Last name (optional)" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>
      {firstNameError && <small>{firstNameError}</small>}
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
      <ButtonPrimary type="submit" disabled={!firstname || !email || !password}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            Create New Account
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
        Have an account?, <Link to="/log-in">Sign in!</Link>
      </p>
      {user ? (
        <Modal>
          <VerificationEmailAlert />
        </Modal>
      ) : null}
    </form>
  )
}
