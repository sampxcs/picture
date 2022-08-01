import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'
import useUser from '../../hooks/useUser'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, pushLocation] = useLocation()
  const { user, signInWithEmail } = useUser()

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
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to='/reset-password'>Forgot your password?</Link>
      <button>
        Sing In
        <FontAwesomeIcon className='faArrow' icon={solid('arrow-right-to-bracket')} />
      </button>
      <p>
        Don't have an account?, <Link to='/sign-up'>Sign up and get started!</Link>
      </p>
    </form>
  )
}
