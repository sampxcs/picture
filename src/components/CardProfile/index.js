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

export default function CardProfile() {
  const { user } = useUser()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="card-profile-container">
      <div className="card-profile">
        <div className="photo-profile">
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.name} title={user.name} />
          ) : (
            <img src="/placeholder-profile.jpg" alt="placeholder-profile" />
          )}
          <button onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <h1>{user.displayName}</h1>
        <h2>{user.email}</h2>
        <Link to="/edit-profile">
          <ButtonPrimary>Edit Profile</ButtonPrimary>
        </Link>
        <p>
          <FontAwesomeIcon icon={faUsers} /> <span>5</span> Followers | <span>152</span> Following
        </p>
        <h3>
          <FontAwesomeIcon icon={faLocationDot} />
          Argentina
        </h3>
        <h3>
          <FontAwesomeIcon icon={faPaperclip} />
          https://sampxcs-portfolio.vercel.app/
        </h3>
        <h3>
          <FontAwesomeIcon icon={faInstagram} />
          Iansrlx
        </h3>
        <h3>
          <FontAwesomeIcon icon={faTwitter} />
          @Sampxcs
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
