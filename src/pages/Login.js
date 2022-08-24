import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../components/SignInForm'

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Picture | Log in</title>
      </Helmet>
      <div className="main">
        <LoginForm />
      </div>
    </>
  )
}
