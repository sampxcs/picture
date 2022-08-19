import React, { useEffect, useState } from 'react'
import './style.css'
import SearchForm from '../SearchForm'
import NavList from '../NavList'
import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons'
import { faHouse, faCompass } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'

import PhotoProfile from '../PhotoProfile'

import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  const [backgroundNav, setBackgroundNav] = useState('transparent')
  const [location] = useLocation()
  const { user, logout } = useUser()

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setBackgroundNav('var(--light-letter)') : setBackgroundNav('transparent')
  })

  useEffect(() => {
    window.scroll({ top: 0 })
    setIsActive(false)
  }, [location])

  return (
    <>
      <nav style={{ backgroundColor: backgroundNav }} className='nav-top'>
        <div className='nav-container'>
          <Link to='/' className='nav-logo' title='Nature'>
            NATURE
          </Link>
          <NavList isActive={isActive} />
          <div className='nav-buttons'>
            <SearchForm formNav={true} />
            <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      </nav>
      <nav className='nav-bottom'>
        <div className='nav-container'>
          <Link className='nav-bottom-link' to='/'>
            <FontAwesomeIcon icon={faHouse} />
            <small>Home</small>
          </Link>
          <Link className='nav-bottom-link' to='/explore'>
            <FontAwesomeIcon icon={faCompass} />
            <small>Explore</small>
          </Link>
          <Link className='nav-bottom-link' to='/profile'>
            <div>
              <PhotoProfile user={user} />
            </div>
            <small>Profile</small>
          </Link>
        </div>
      </nav>
    </>
  )
}
