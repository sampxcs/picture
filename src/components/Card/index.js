import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
import LoginForm from '../SignInForm'
import Modal from '../Modal'

function Card({ id, title, src, alt, photographer, photographer_url, avg_color, className, isSaved }) {
  const [saved, setSaved] = useState(isSaved)
  const [showModal, setShowModal] = useState(false)
  const { user, savePexel, deleteSavedPexel } = useUser()

  const handelSave = () => {
    if (user) {
      if (saved) {
        deleteSavedPexel(saved.toString())
        setSaved(null)
      } else {
        savePexel({
          userId: user.userImpL.uid,
          pexelId: id,
          src: src,
          alt: alt,
          photographer: photographer,
          photographer_url: photographer_url,
          avg_color: avg_color,
        }).then(() => {
          setSaved(id)
        })
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
                  <FontAwesomeIcon className='faMaximize' icon={faEye} />
                </div>
              </Link>
              <div className='icon' title='Save' onClick={handelSave}>
                {saved ? (
                  <FontAwesomeIcon className='faBookmark' icon={fasBookmark} />
                ) : (
                  <FontAwesomeIcon className='faBookmark' icon={faBookmark} />
                )}
              </div>
            </div>
          </div>
        )}
        {className === 'card-detail' && (
          <div className='card-detail' title={alt}>
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
                    <FontAwesomeIcon className='faMaximize' icon={faEye} />
                  </div>
                </Link>
                <div className='icon' title='Save' onClick={handelSave}>
                  {saved ? (
                    <FontAwesomeIcon className='faBookmark' icon={fasBookmark} />
                  ) : (
                    <FontAwesomeIcon className='faBookmark' icon={faBookmark} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {className === 'card-collection-explore' && (
          <div className='card-collection-explore' title={alt}>
            <Link to={`/Explore/${title.toLowerCase()}`} className='card-info-explore'>
              {title}
            </Link>
          </div>
        )}
        {className === 'card-collection-profile' && (
          <div className='card-collection-profile' title={alt}>
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
                  <FontAwesomeIcon className='faMaximize' icon={faEye} />
                </div>
              </Link>
            </div>
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
