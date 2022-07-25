import React from 'react'
import { Helmet } from 'react-helmet'
import Profile from '../components/Profile'

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Nature | Profile</title>
      </Helmet>
      <header>
        <Profile />
      </header>
    </>
  )
}
