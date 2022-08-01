import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'
import useUser from '../../hooks/useUser'

export default function SignUpForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, pushLocation] = useLocation()
  const { user, createUserWithEmail } = useUser()

  const handelSubmit = (e) => {
    e.preventDefault()
    createUserWithEmail({ email: email, password: password })
  }

  useEffect(() => {
    user && pushLocation('./')
  }, [user])

  return (
    <form className='sign-up-form' onSubmit={handelSubmit}>
      <h2>Welcome to Nature</h2>
      <h3>Download free photos and videos powered by a community of photographers.</h3>
      <div>
        <input type='text' placeholder='First name' value={firstname} required onChange={(e) => setFirstname(e.target.value)} />
        <input type='text' placeholder='Last name (optional)' value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>
      <input type='email' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button>
        Create New Account
        <FontAwesomeIcon className='faArrow' icon={solid('arrow-right-to-bracket')} />
      </button>
      <p>
        Have an account?, <Link to='/log-in'>Sign in!</Link>
      </p>
    </form>
  )
}
