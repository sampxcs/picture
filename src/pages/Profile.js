import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import ProfilePlaceholder from '../components/Placeholders/ProfilePlaceholder'
import Profile from '../components/Profile'
import useUser from '../hooks/useUser'

export default function ProfilePage() {
  const { user, getSavedPexels } = useUser()
  const [savedPexels, setSavedPexels] = useState(null)

  useEffect(() => {
    user &&
      getSavedPexels(user.uid).then((savedPexelsData) => {
        const savedPexels = savedPexelsData.map((pexel) => pexel.data)
        console.log(savedPexels)
        setSavedPexels(savedPexels)
      })
  }, [user])

  return (
    <>
      {user ? (
        <div className='main'>
          <ProfilePlaceholder />
        </div>
      ) : (
        <div className='main'>
          <ProfilePlaceholder />
        </div>
      )}
    </>
  )
}

{
  /* <>
          <Helmet>
            <title>Nature | Profile</title>
          </Helmet>
          <Profile savedPexels={savedPexels} />
          <Footer />
        </> */
}
