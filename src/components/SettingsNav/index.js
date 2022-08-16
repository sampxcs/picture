import React from 'react'
import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGem, faBell, faEnvelope, faEyeSlash, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import './style.css'

export default function SettingsNav({ user }) {
  return (
    <div className='settings-nav'>
      <div className='settings-nav-header'>
        <div className='settings-nav-photo-profile'>
          {user.userImpL.photoURL ? (
            <img src={user.userImpL.photoURL} alt={user.userImpL.name} title={user.userImpL.name} />
          ) : (
            <img src='/placeholder-profile.jpg' alt='placeholder-profile' />
          )}
        </div>
        <div className='settings-nav-title'>
          <h2>{user.userImpL.displayName}</h2>
          <p>Your personal account</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to='/settings' className='active'>
            <FontAwesomeIcon className='icon' icon={faUser} />
            Edit profile
          </Link>
        </li>
        <li>
          <Link to='/settings'>
            <FontAwesomeIcon icon={faGem} />
            Account
          </Link>
        </li>
        <li>
          <Link to='/settings'>
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </Link>
        </li>
        <hr />
        <small>Access</small>
        <li>
          <Link to='/settings'>
            <FontAwesomeIcon icon={faEyeSlash} />
            Password and authentication
          </Link>
        </li>
        <li>
          <Link to='/settings'>
            <FontAwesomeIcon icon={faQuestionCircle} />
            Moderation
          </Link>
        </li>
        <hr />
        <small>Security</small>
        <li>
          <Link to='/settings'>
            <FontAwesomeIcon icon={faEyeSlash} />
            Code security and analysis
          </Link>
        </li>
      </ul>
    </div>
  )
}
