import React, { useEffect, useState } from 'react'
import './style.css'

import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

import useUser from '../../hooks/useUser'

import ButtonPrimary from '../ButtonPrimary'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, pushLocation] = useLocation()
  const { user, signInWithEmail, signInWithGoogle, signInWithGitHub } = useUser()

  useEffect(() => {
    user && pushLocation('./')
  }, [user])

  const handelSubmit = (e) => {
    e.preventDefault()
    signInWithEmail({ email: email, password: password })
  }

  return (
    <form className='login-form' onSubmit={handelSubmit}>
      <h2>Welcome Back</h2>
      <h3>Log in to Nature to access your collections.</h3>
      <input type='email' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
      <Link to='/reset-password'>Forgot your password?</Link>
      <ButtonPrimary type='submit' disabled={!email || !password}>
        Sing In
        <FontAwesomeIcon className='faArrow' icon={faArrowRightToBracket} />
      </ButtonPrimary>
      <p>Or continue with</p>
      <ButtonPrimary type='button' onClick={signInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        Google
      </ButtonPrimary>
      <ButtonPrimary type='button' onClick={signInWithGitHub}>
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </ButtonPrimary>
      <p>
        Don't have an account?, <Link to='/sign-up'>Sign up and get started!</Link>
      </p>
    </form>
  )
}
