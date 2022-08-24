import React, { useEffect, useState } from 'react'
import './style.css'

import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faCompass as fasCompass } from '@fortawesome/free-solid-svg-icons'

import useUser from '../../hooks/useUser'

import FaHouse from './FaHouse'
import FasHouse from './FasHouse'

import NavList from '../NavList'
import SearchForm from '../SearchForm'
import PhotoProfile from '../PhotoProfile'
import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  const [backgroundNav, setBackgroundNav] = useState('transparent')
  const [location] = useLocation()
  const { user, userStatusCode } = useUser()

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setBackgroundNav('var(--light-letter)') : setBackgroundNav('transparent')
  })

  useEffect(() => {
    window.scroll({ top: 0 })
    setIsActive(false)
  }, [location])

  return (
    <>
      <nav style={{ backgroundColor: backgroundNav }} className="nav-top">
        <div className="nav-container">
          <Link to="/" className="nav-logo" title="Nature">
            Picture
          </Link>
          <NavList isActive={isActive} />
          <div className="nav-buttons">
            <SearchForm formNav={true} />
            <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      </nav>
      <nav className="nav-bottom">
        <div className="nav-container">
          <Link className="nav-bottom-link" to="/">
            {location === '/' ? <FasHouse /> : <FaHouse />}
            <small>Home</small>
          </Link>
          <Link className="nav-bottom-link" to="/explore">
            {location === '/explore' ? <FontAwesomeIcon icon={fasCompass} /> : <FontAwesomeIcon icon={faCompass} />}
            <small>Explore</small>
          </Link>
          <Link className="nav-bottom-link" to="/profile">
            <div>
              <PhotoProfile user={user} userStatusCode={userStatusCode} />
            </div>
            <small>Profile</small>
          </Link>
        </div>
      </nav>
    </>
  )
}
