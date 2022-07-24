import React from 'react'
import { Helmet } from 'react-helmet'
import ResetPasswordForm from '../components/ResetPasswordForm'

export default function ResetPassword() {
  return (
    <>
      <Helmet>
        <title>Nature | Reset Password</title>
      </Helmet>
      <header>
        <ResetPasswordForm />
      </header>
    </>
  )
}
