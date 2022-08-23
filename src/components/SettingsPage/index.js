import React from 'react'
import './style.css'

import SettingsNav from '../SettingsNav'
import SettingsProfile from '../SettingsProfile'

export default function Settings({ user, userStatusCode }) {
  return (
    <div className='main'>
      <div className='settings-main'>
        <SettingsNav user={user} userStatusCode={userStatusCode} />
        <SettingsProfile user={user} userStatusCode={userStatusCode} />
      </div>
    </div>
  )
}
