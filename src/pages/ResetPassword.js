import React from 'react'
import { Helmet } from 'react-helmet'
import ResetPasswordForm from '../components/ResetPasswordForm'

export default function ResetPassword() {
  return (
    <>
      <Helmet>
        <title>Picture | Reset Password</title>
      </Helmet>
      <div className="main">
        <ResetPasswordForm />
      </div>
    </>
  )
}
