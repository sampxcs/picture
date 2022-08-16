import React from 'react'
import './style.css'
import ButtonCircle from '../ButtonCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

export default function PhotoProfile({ user, onClick }) {
  return (
    <div className='photo-profile'>
      {user.userImpL.photoURL ? (
        <img src={user.userImpL.photoURL} alt={user.userImpL.name} title={user.userImpL.name} />
      ) : (
        <img src='/placeholder-profile.jpg' alt='placeholder-profile' />
      )}
      <ButtonCircle onClick={onClick} title={'Edit Photo'}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </ButtonCircle>
    </div>
  )
}
