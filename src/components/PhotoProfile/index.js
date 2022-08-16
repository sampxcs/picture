import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

import ButtonCircle from '../ButtonCircle'
import Modal from '../Modal'
import AddPhotoProfileForm from '../AddPhotoProfileForm/intex'

export default function PhotoProfile({ user, editable }) {
  const [showModal, setShowModal] = useState(false)
  const [src, setSrc] = useState(user.userImpL.photoURL)

  return (
    <div className="photo-profile">
      <img src={src} onError={() => setSrc('/placeholder-profile.jpg')} alt={user.userImpL.displayName} title={user.userImpL.displayName} />
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
}
