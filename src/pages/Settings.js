import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import EditProfile from '../components/EditProfile'
import useUser from '../hooks/useUser'
import SettingsPlaceholder from '../components/Placeholders/SettingsPlaceholder'
import Settings from '../components/SettingsPage'

export default function SettingsPage() {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <>
          <Settings user={user} />
          <Footer />
        </>
      ) : (
        <div className='main'>
          <SettingsPlaceholder />
        </div>
      )}
    </>
  )
}
