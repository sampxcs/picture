import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
import LoginForm from '../SignInForm'
import Modal from '../Modal'

function Card({ id, title, src, alt, photographer, photographer_url, avg_color, className }) {
  const [saved, setSaved] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { user, savePexel } = useUser()

  const handelSave = () => {
    if (user) {
      if (saved) {
        setSaved(false)
      } else {
        savePexel({ userId: user.uid, pexelId: id })
        setSaved(true)
      }
    } else {
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className='card' style={{ backgroundColor: avg_color }}>
      <Link to={`/Detail/${id}`} className='img'>
        <img src={src} alt={alt}></img>
      </Link>
      <>
        {className === 'card-main' && (
          <div className='card-info' title={alt}>
            <div className='card-info-text'>
              <a className='card-link' href={photographer_url} target='_blank' rel='noopener noreferrer' title={photographer}>
                {photographer}
              </a>
              <Link to={`/Detail/${id}`}>
                <p>
                  {alt}
                  <span></span>
                </p>
              </Link>
            </div>
            <div className='options'>
              <Link to={`/Detail/${id}`}>
                <div className='icon' title='Maximize'>
                  <FontAwesomeIcon className='faMaximize' icon={regular('eye')} />
                </div>
              </Link>
              <div className='icon' title='Save' onClick={handelSave}>
                {saved ? (
                  <FontAwesomeIcon className='faBookmark' icon={solid('bookmark')} />
                ) : (
                  <FontAwesomeIcon className='faBookmark' icon={regular('bookmark')} />
                )}
              </div>
            </div>
          </div>
        )}
        {className === 'card-detail' && (
          <div className='card-detail' title={alt}>
            <h1>CARD DETAIL IN CONSTRUCTION!!!</h1>
          </div>
        )}
        {className === 'card-explore' && (
          <div className='card-explore' title={alt}>
            <Link to={`/Explore/${title}`} className='card-info-explore'>
              {title}
            </Link>
          </div>
        )}
      </>
      {showModal && (
        <Modal close={closeModal}>
          <LoginForm />
        </Modal>
      )}
    </div>
  )
}

export default React.memo(Card)
