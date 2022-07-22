import React from 'react'
import { Helmet } from 'react-helmet'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Nature | Log in</title>
      </Helmet>
      <header>
        <LoginForm />
      </header>
    </>
  )
}
