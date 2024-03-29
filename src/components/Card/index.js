import React, { useState } from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as fasBookmark, faHeart as fasHeart, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'wouter'

import useUser from '../../hooks/useUser'

import LoginForm from '../SignInForm'
import Modal from '../Modal'

function Card({ id, title, src, alt, photographer, photographer_url, avg_color, className, isSaved }) {
  const [saved, setSaved] = useState(isSaved)
  const [like, setLike] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { user, savePexel, deleteSavedPexel } = useUser()

  const handleSave = () => {
    if (user) {
      if (saved) {
        deleteSavedPexel(saved.toString())
        console.log('delete saved')
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

  const handleLike = () => {
    if (user) {
      if (like) {
        setLike(null)
      } else {
        setLike(true)
      }
    } else {
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="card" style={{ backgroundColor: avg_color }}>
      <Link to={`/Detail/${id}`} className="img">
        <img src={src} alt={alt}></img>
      </Link>
      <>
        {// --------- CARD INFO OF MAIN ---------- //
        className === 'card-main' && (
          <div className="card-info" title={alt}>
            <div className="card-info-text">
              <a className="card-link" href={photographer_url} target="_blank" rel="noopener noreferrer" title={photographer}>
                {photographer}
              </a>
              <Link to={`/Detail/${id}`}>
                <p>
                  {alt}
                  <span></span>
                </p>
              </Link>
            </div>
            <div className="options">
              <div className="icon" title="Like" onClick={handleLike}>
                {like ? <FontAwesomeIcon className="fasHeart" icon={fasHeart} /> : <FontAwesomeIcon className="faHeart" icon={faHeart} />}
              </div>
              <div className="icon" title="Save" onClick={handleSave}>
                {saved ? (
                  <FontAwesomeIcon className="faBookmark" icon={fasBookmark} />
                ) : (
                  <FontAwesomeIcon className="faBookmark" icon={faBookmark} />
                )}
              </div>
            </div>
            <Link to={`/Detail/${id}`} className="maximize"></Link>
          </div>
        )}
        {// --------- CARD INFO OF DETAIL ---------- //
        className === 'card-detail' && (
          <div className={className} title={alt}>
            <div className="card-info" title={alt}>
              <div className="card-info-text">
                <a className="card-link" href={photographer_url} target="_blank" rel="noopener noreferrer" title={photographer}>
                  {photographer}
                </a>
                <Link to={`/Detail/${id}`}>
                  <p>{alt}</p>
                </Link>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa alias error tenetur, numquam quas minima dolore
                  impedit perspiciatis sequi eum qui libero, hic nisi obcaecati, enim repudiandae commodi aut?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa alias error tenetur, numquam quas minima dolore
                  impedit perspiciatis sequi eum qui libero, hic nisi obcaecati, enim repudiandae commodi aut?
                </p>
              </div>
              <div className="options">
                <div className="icon" title="Download">
                  <FontAwesomeIcon className="faDownload" icon={faArrowDown} />
                </div>
                <div className="icon" title="Like">
                  <FontAwesomeIcon className="faheart" icon={faHeart} />
                </div>
                <div className="icon" title="Save" onClick={handleSave}>
                  {saved ? (
                    <FontAwesomeIcon className="faBookmark" icon={fasBookmark} />
                  ) : (
                    <FontAwesomeIcon className="faBookmark" icon={faBookmark} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {// --------- CARD INFO OF EXPLORE ---------- //
        className === 'card-collection-explore' && (
          <div className={className} title={alt}>
            <Link to={`/Explore/${title.toLowerCase()}`} className="card-info-explore">
              {title}
            </Link>
          </div>
        )}
        {// --------- CARD INFO OF PROFILE ---------- //
        className === 'card-collection-profile' && (
          <div className={className} title={alt}>
            <div className="card-info-text">
              <a className="card-link" href={photographer_url} target="_blank" rel="noopener noreferrer" title={photographer}>
                {photographer}
              </a>
              <Link to={`/Detail/${id}`}>
                <p>
                  {alt}
                  <span></span>
                </p>
              </Link>
            </div>
            <div className="options">
              <Link to={`/Detail/${id}`}>
                <div className="icon" title="Maximize">
                  <FontAwesomeIcon className="faMaximize" icon={faEye} />
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
