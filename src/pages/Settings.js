import React from 'react'
import { Helmet } from 'react-helmet'
import Settings from '../components/SettingsPage'

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Nature | Settings</title>
      </Helmet>
      <header>
        <Settings />
      </header>
    </>
  )
}
