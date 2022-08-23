import React, { useEffect, useState } from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

import ButtonCircle from '../ButtonCircle'
import Modal from '../Modal'
import AddPhotoProfileForm from '../AddPhotoProfileForm'

export default function PhotoProfile({ user, userStatusCode, editable }) {
  const [showModal, setShowModal] = useState(false)
  const [src, setSrc] = useState(user ? user.userImpL.photoURL : '/placeholder-profile.jpg')

  useEffect(() => {
    user && setSrc(user.userImpL.photoURL)
  }, [user])

  if (userStatusCode === 1)
    return (
      <div className="photo-profile">
        <img src={src} alt={'Profile'} title={'Photo Profile'} />
      </div>
    )

  if (userStatusCode === 2)
    return (
      <div className="photo-profile">
        <img
          src={src}
          onError={() => setSrc('/placeholder-profile.jpg')}
          alt={user.userImpL.displayName}
          title={user.userImpL.displayName}
        />
        {editable && (
          <ButtonCircle onClick={() => setShowModal(true)} title={'Edit Photo'}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </ButtonCircle>
        )}
        {showModal && (
          <Modal close={() => setShowModal(false)}>
            <AddPhotoProfileForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    )

  if (userStatusCode === 3)
    return (
      <div className="photo-profile">
        <img src={src} alt={'Profile'} title={'Photo Profile'} />
      </div>
    )
}
