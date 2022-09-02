import React, { useEffect, useState } from 'react'
import './style.css'

import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faCompass as fasCompass } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import useUser from '../../hooks/useUser'

import FaHouse from './FaHouse'
import FasHouse from './FasHouse'

import NavList from '../NavList'
import SearchForm from '../SearchForm'
import PhotoProfile from '../PhotoProfile'
import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  const [navActive, setNavActive] = useState(false)
  const [location] = useLocation()
  const { user, userStatusCode } = useUser()

  const CLASSNAMES = classNames({
    'nav-top': true,
    'nav-top-home': location === '/' && !navActive,
    'nav-top-active': navActive,
  })

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setNavActive(true) : setNavActive(false)
  })

  useEffect(() => {
    window.scroll({ top: 0 })
    setIsActive(false)
  }, [location])

  return (
    <>
      <nav className={CLASSNAMES}>
        <div className="nav-container">
          <div className="nav-logo">
          <Link to="/" title="Nature">
            <img src={!navActive && location === '/' && window.innerWidth > 660 ? 'Picture-logo-regular-white.png' : 'Picture-logo-regular-black.png'} />
          </Link>
          </div>
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
