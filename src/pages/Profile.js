import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Profile from '../components/Profile'
import useUser from '../hooks/useUser'

export default function ProfilePage() {
  const { user } = useUser()
  return (
    <>
      {user ? (
        <>
          <Helmet>
            <title>Nature | Profile</title>
          </Helmet>
          <Profile />
          <Footer />
        </>
      ) : null}
    </>
  )
}
