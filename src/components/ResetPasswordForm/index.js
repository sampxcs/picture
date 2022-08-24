import React, { useState } from 'react'
import './style.css'

import { Link } from 'wouter'

import useUser from '../../hooks/useUser'

import ButtonPrimary from '../ButtonPrimary'
import Modal from '../Modal'
import VerificationEmailAlert from '../VerificationEmailAlert'
import Spinner from '../Spinner'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [emailError, setEmailError] = useState()
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useUser()

  const handelSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    resetPassword({ email: email })
      .then(() => {
        setLoading(false)
        setShowModal(true)
      })
      .catch((error) => {
        console.dir(error)
        setLoading(false)
        setEmailError('Invalid email')
      })
  }

  return (
    <form className='reset-pasword-form' onSubmit={handelSubmit}>
      <h2>Reset Password</h2>
      <input
        className={emailError && 'input-error'}
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <small>{emailError}</small>}
      <ButtonPrimary disabled={!email}>{loading ? <Spinner /> : <>Send Reset Password Instructions</>}</ButtonPrimary>
      <p>
        Already using Nature?, <Link to='/log-in'>Sign in!</Link>
      </p>
      {showModal ? (
        <Modal close={() => setShowModal(false)}>
          <VerificationEmailAlert />
        </Modal>
      ) : null}
    </form>
  )
}
