import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
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
        <>
          <Helmet>
            <title>Nature | Profile</title>
          </Helmet>
          <Profile savedPexels={savedPexels} />
          <Footer />
        </>
      ) : null}
    </>
  )
}
