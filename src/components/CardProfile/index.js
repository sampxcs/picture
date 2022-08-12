import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import ButtonPrimary from '../ButtonPrimary'
import Modal from '../Modal'
import AddPhotoProfileForm from '../AddPhotoProfileForm/intex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLocationDot, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import { Link } from 'wouter'
import ButtonCircle from '../ButtonCircle'

export default function CardProfile() {
  const { user } = useUser()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='card-profile-container'>
      <div className='card-profile'>
        <div className='photo-profile'>
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.name} title={user.name} />
          ) : (
            <img src='/placeholder-profile.jpg' alt='placeholder-profile' />
          )}
          <ButtonCircle onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </ButtonCircle>
        </div>
        <h1>{user.displayName}</h1>
        <h2>{user.email}</h2>
        <Link to='/edit-profile'>
          <ButtonPrimary>Edit Profile</ButtonPrimary>
        </Link>
        <p>
          <FontAwesomeIcon icon={faUsers} /> <span>5</span> Followers | <span>152</span> Following
        </p>
        <h3>
          <FontAwesomeIcon icon={faLocationDot} />
          Argentina
        </h3>
        <a href='https://sampxcs-portfolio.vercel.app/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faPaperclip} />
          https://sampxcs-portfolio.vercel.app/
        </a>
        <a href='https://instagram/Iansrlx' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
          Iansrlx
        </a>
        <a href='https://twitter/Sampxcs' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} />
          @Sampxcs
        </a>
      </div>
      {showModal ? (
        <Modal close={() => setShowModal(false)}>
          <AddPhotoProfileForm setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </div>
  )
}
