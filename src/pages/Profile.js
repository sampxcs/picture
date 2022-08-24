import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'wouter'
import Footer from '../components/Footer/Footer'
import ProfilePlaceholder from '../components/Placeholders/ProfilePlaceholder'
import Profile from '../components/Profile'
import useUser from '../hooks/useUser'

export default function ProfilePage() {
  const { user, userStatusCode } = useUser()
  const [, pushLocation] = useLocation()

  if (userStatusCode === 1)
    return (
      <div className='main'>
        <ProfilePlaceholder />
      </div>
    )

  if (userStatusCode === 2)
    return (
      <>
        <Helmet>
          <title>Picture | Profile</title>
        </Helmet>
        <Profile user={user} userStatusCode={userStatusCode} />
        {window.innerWidth > 660 && <Footer />}
      </>
    )

  if (userStatusCode === 3) pushLocation('/log-in')
}
