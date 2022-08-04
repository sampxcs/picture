import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Profile from '../components/Profile'

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Nature | Profile</title>
      </Helmet>
      <Profile />
      <Footer />
    </>
  )
}
