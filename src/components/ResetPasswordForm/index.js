import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import './style.css'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [, pushLocation] = useLocation()

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    pushLocation('./')
  }

  return (
    <form className='reset-pasword-form' onSubmit={handelSubmit}>
      <h2>Reset Password</h2>
      <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Send Reset Password Instructions</button>
      <p>
        Already using Nature?, <Link to='/log-in'>Sign in!</Link>
      </p>
    </form>
  )
}
