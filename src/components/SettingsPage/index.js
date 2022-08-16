import React from 'react'
import SettingsNav from '../SettingsNav'
import './style.css'
import SettingsProfile from '../SettingsProfile'

export default function Settings({ user }) {
  return (
    <div className='main'>
      <div className='settings-main'>
        <SettingsNav user={user} />
        <SettingsProfile user={user} />
      </div>
    </div>
  )
}
