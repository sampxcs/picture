import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import EditProfile from '../components/EditProfile'
import useUser from '../hooks/useUser'
import SettingsPlaceholder from '../components/Placeholders/SettingsPlaceholder'

export default function EditProfilePage() {
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
          <SettingsPlaceholder />
        </div>
      ) : (
        <div className='main'>
          <SettingsPlaceholder />
        </div>
      )}
    </>
  )
}
