import React from 'react'
import Footer from '../components/Footer/Footer'
import useUser from '../hooks/useUser'
import SettingsPlaceholder from '../components/Placeholders/SettingsPlaceholder'
import Settings from '../components/SettingsPage'
import { useLocation } from 'wouter'

export default function SettingsPage() {
  const { user, userStatusCode } = useUser()
  const [, pushLocation] = useLocation()

  if (userStatusCode === 1)
    return (
      <div className='main'>
        <SettingsPlaceholder />
      </div>
    )

  if (userStatusCode === 2)
    return (
      <>
        <Settings user={user} userStatusCode={userStatusCode} />
        <Footer />
      </>
    )

  if (userStatusCode === 3) pushLocation('/log-in')
}
