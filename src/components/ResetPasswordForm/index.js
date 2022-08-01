import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import './style.css'
import useUser from '../../hooks/useUser'
import Modal from '../Modal'
import VerificationEmailAlert from '../VerificationEmailAlert'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const { resetPassword } = useUser()

  const handelSubmit = (e) => {
    e.preventDefault()
    resetPassword({ email: email })
    setShowModal(true)
  }

  return (
    <form className="reset-pasword-form" onSubmit={handelSubmit}>
      <h2>Reset Password</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Send Reset Password Instructions</button>
      <p>
        Already using Nature?, <Link to="/log-in">Sign in!</Link>
      </p>
      {showModal ? (
        <Modal close={() => setShowModal(false)}>
          <VerificationEmailAlert />
        </Modal>
      ) : null}
    </form>
  )
}
