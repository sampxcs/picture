import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import ButtonPrimary from '../ButtonPrimary'
import Modal from '../Modal'
import AddPhotoProfileForm from '../AddPhotoProfileForm/intex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'
import { Link } from 'wouter'

export default function CardProfile() {
  const { user } = useUser()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='card-profile-container'>
      <div className='card-profile'>
        <div className='photo-profile'>
          {user.photoURL ? <img src={user.photoURL} /> : <img src='/placeholder-profile.jpg' />}
          <button onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={regular('pen-to-square')} />
          </button>
        </div>
        <h1>{user.displayName}</h1>
        <h2>{user.email}</h2>
        <Link to='/edit-profile'>
          <ButtonPrimary>Edit Profile</ButtonPrimary>
        </Link>
        <p>
          <FontAwesomeIcon icon={solid('users')} /> <span>5</span> Followers | <span>152</span> Following
        </p>
        <h3>
          <FontAwesomeIcon icon={solid('location-dot')} />
          Argentina.
        </h3>
      </div>
      {showModal ? (
        <Modal close={() => setShowModal(false)}>
          <AddPhotoProfileForm setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </div>
  )
}
