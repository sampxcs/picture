import React, { useEffect, useRef, useState } from 'react'
import './style.css'

import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useLocation } from 'wouter'

import Modal from '../Modal'
import ChangeLenguageForm from '../ChangeLenguageForm'

import useUser from '../../hooks/useUser'

export default function NavList({ isActive }) {
  const [location, pushLocation] = useLocation()
  const [showModal, setShowModal] = useState(false)
  const { user, logout } = useUser()

  const ref = useRef()
  const element = ref.current

  useEffect(() => {
    !user && pushLocation('./')
  }, [user])

  useEffect(() => {
    element && element.classList.remove('nav-ul-active')
    setShowModal(false)
  }, [location])

  if (isActive) element && element.classList.add('nav-ul-active')
  else element && element.classList.remove('nav-ul-active')

  return (
    <ul className='nav-ul' ref={ref}>
      <li>
        <Link to='/Explore'>EXPLORE</Link>
        <div className='nav-ul-list'>
          <ul>
            <li>
              <Link to='/Explore'>Discover Photos</Link>
            </li>
            <li>
              <Link to='/Explore/Landscape'>Landscape</Link>
            </li>
            <li>
              <Link to='/Explore/Forest'>Forest</Link>
            </li>
            <li>
              <Link to='/Explore/Ocean'>Ocean Life</Link>
            </li>
            <li>
              <Link to='/Explore/Sky'>Sky</Link>
            </li>
            <li>
              <Link to='/Explore/Flowers'>Flowers</Link>
            </li>
            <li>
              <Link to='/Explore/Videos%20Nature'>Videos</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to='#'>ACTIVITY</Link>
      </li>
      <li>
        <Link to='#'>PROFILE</Link>
        <div className='nav-ul-list nav-ul-profile'>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to='/profile'>Your Collections</Link>
                </li>
                <li>
                  <Link to='/settings'>Settings</Link>
                </li>
                <li>
                  <button className='btn-nav' onClick={logout}>
                    Sign out
                    <FontAwesomeIcon className='faArrow' icon={solid('arrow-right-from-bracket')} />
                  </button>
                </li>
                <hr />
              </>
            ) : (
              <>
                <li>
                  <Link to='/log-in'>
                    Login
                    <FontAwesomeIcon className='faArrow' icon={solid('arrow-right-to-bracket')} />
                  </Link>
                </li>
                <li>
                  <Link to='/sign-up'>Sign up</Link>
                </li>
              </>
            )}
            <li>
              <button className='btn-nav' onClick={() => setShowModal(true)}>
                Change Lenguage
              </button>
              {showModal && (
                <Modal close={() => setShowModal(false)}>
                  <ChangeLenguageForm />
                </Modal>
              )}
            </li>
            <li>
              <Link to='/FAQ'>FAQ</Link>
            </li>
            <li>
              <Link to='/AboutDeveloper'>About Developer</Link>
            </li>
            <hr />
            <li>
              <a href='https://www.pexels.com' target='_blank' rel='noopener noreferrer'>
                Photos provided by Pexels
                <img src='https://images.pexels.com/lib/api/pexels.png' alt='Pexels' />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  )
}
