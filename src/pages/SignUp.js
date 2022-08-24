import React from 'react'
import { Helmet } from 'react-helmet'
import SignUpForm from '../components/SignUpForm'

export default function SignUp() {
  return (
    <>
      <Helmet>
        <title>Picture | Join</title>
      </Helmet>
      <div className="main">
        <SignUpForm />
      </div>
    </>
  )
}
