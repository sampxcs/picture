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

export default function SignUpForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, createUserWithEmail, signInWithGoogle, signInWithGitHub } = useUser()

  const handelSubmit = (e) => {
    e.preventDefault()
    createUserWithEmail({ firstname: firstname, lastname: lastname, email: email, password: password })
  }

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
      <ButtonPrimary type='submit' disabled={!firstname || !email || !password}>
        Create New Account
        <FontAwesomeIcon className='faArrow' icon={faArrowRightToBracket} />
      </ButtonPrimary>
      <p>Or continue with</p>
      <ButtonPrimary type='button' onClick={signInWithGoogle}>
        <FontAwesomeIcon className='faUser' icon={faGoogle} />
        Google
      </ButtonPrimary>
      <ButtonPrimary type='button' onClick={signInWithGitHub}>
        <FontAwesomeIcon className='faUser' icon={faGithub} />
        GitHub
      </ButtonPrimary>
      <p>
        Have an account?, <Link to='/log-in'>Sign in!</Link>
      </p>
      {user ? (
        <Modal>
          <VerificationEmailAlert />
        </Modal>
      ) : null}
    </form>
  )
}
