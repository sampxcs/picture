import React, { useState } from 'react'

import ButtonPrimary from '../ButtonPrimary'
import Modal from '../Modal'
import AddPhotoProfileForm from '../AddPhotoProfileForm/intex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLocationDot, faPaperclip } from '@fortawesome/free-solid-svg-icons'

import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import { Link } from 'wouter'

import PhotoProfile from '../PhotoProfile'

export default function CardProfile({ user }) {
  const [showModal, setShowModal] = useState(false)

  if (user.profileInfo)
    return (
      <div className='card-profile-container'>
        <div className='card-profile'>
          <PhotoProfile user={user} onClick={() => setShowModal(true)} />
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
          {user.profileInfo.instagram && (
            <a href={`https://instagram/${user.profileInfo.instagram}`} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />@{user.profileInfo.instagram}
            </a>
          )}
          {user.profileInfo.twitter && (
            <a href={`https://twitter/${user.profileInfo.twitter}`} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} />@{user.profileInfo.twitter}
            </a>
          )}
          {user.profileInfo.linkedin && (
            <a href={user.profileInfo.linkedin} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
              LinkEdin
            </a>
          )}
          {user.profileInfo.facebook && (
            <a href={user.profileInfo.facebook} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>
          )}
        </div>
        {showModal ? (
          <Modal close={() => setShowModal(false)}>
            <AddPhotoProfileForm setShowModal={setShowModal} />
          </Modal>
        ) : null}
      </div>
    )
  return (
    <div className='card-profile-container'>
      <div className='card-profile'>
        <PhotoProfile user={user} onClick={() => setShowModal(true)} />
        <h1>{user.userImpL.displayName}</h1>
        <h2>{user.userImpL.email}</h2>
        <Link to='/settings/profile'>
          <ButtonPrimary>Edit Profile</ButtonPrimary>
        </Link>
        <p>
          <FontAwesomeIcon icon={faUsers} /> <span>5</span> Followers | <span>152</span> Following
        </p>
      </div>
      {showModal ? (
        <Modal close={() => setShowModal(false)}>
          <AddPhotoProfileForm setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </div>
  )
}
