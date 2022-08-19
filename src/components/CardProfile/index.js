import React from 'react'

import ButtonPrimary from '../ButtonPrimary'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLocationDot, faPaperclip } from '@fortawesome/free-solid-svg-icons'

import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import { Link } from 'wouter'

import PhotoProfile from '../PhotoProfile'

export default function CardProfile({ user }) {
  if (user.profileInfo)
    return (
      <div className='card-profile-container'>
        <div className='card-profile'>
          <PhotoProfile user={user} editable />
          <h1>{user.userImpL.displayName}</h1>
          <h2>{user.userImpL.email}</h2>
          <Link to='/settings/profile'>
            <ButtonPrimary>Edit Profile</ButtonPrimary>
          </Link>
          <p>
            <FontAwesomeIcon icon={faUsers} /> <span>5</span> Followers | <span>152</span> Following
          </p>
          {user.profileInfo.location && (
            <h3>
              <FontAwesomeIcon icon={faLocationDot} />
              {user.profileInfo.location}
            </h3>
          )}
          {user.profileInfo.website && (
            <a href='https://sampxcs-portfolio.vercel.app/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faPaperclip} />
              {user.profileInfo.website}
            </a>
          )}
          <div className='card-profile-social-container'>
            {user.profileInfo.instagram && (
              <a href={`https://instagram/${user.profileInfo.instagram}`} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} />
                <span className='card-profile-social-text'>@{user.profileInfo.instagram}</span>
              </a>
            )}
            {user.profileInfo.twitter && (
              <a href={`https://twitter/${user.profileInfo.twitter}`} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faTwitter} />
                <span className='card-profile-social-text'>@{user.profileInfo.twitter}</span>
              </a>
            )}
            {user.profileInfo.linkedin && (
              <a href={user.profileInfo.linkedin} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
                <span className='card-profile-social-text'>LinkEdin</span>
              </a>
            )}
            {user.profileInfo.facebook && (
              <a href={user.profileInfo.facebook} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} />
                <span className='card-profile-social-text'>Facebook</span>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  return (
    <div className='card-profile-container'>
      <div className='card-profile'>
        <PhotoProfile user={user} editable />
        <h1>{user.userImpL.displayName}</h1>
        <h2>{user.userImpL.email}</h2>
        <Link to='/settings/profile'>
          <ButtonPrimary>Edit Profile</ButtonPrimary>
        </Link>
        <p>
          <FontAwesomeIcon icon={faUsers} /> <span>5</span> Followers | <span>152</span> Following
        </p>
      </div>
    </div>
  )
}
