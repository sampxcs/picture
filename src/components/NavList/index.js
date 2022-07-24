import React, { useEffect, useRef } from 'react'
import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'
import useUser from '../../hooks/useUser'
import { useLocation } from 'wouter'

export default function NavList({ isActive }) {
  const ref = useRef()
  const [, pushLocation] = useLocation()
  const element = ref.current
  const { isLogged, logout } = useUser()

  if (isActive) element && element.classList.add('nav-ul-active')
  else element && element.classList.remove('nav-ul-active')

  useEffect(() => {
    !isLogged && pushLocation('./')
  }, [isLogged])

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
        <div className='nav-ul-list profile'>
          <ul>
            {isLogged ? (
              <>
                <li>
                  <Link to=''>Your Collections</Link>
                </li>
                <li>
                  <button className='btn-logout' onClick={logout}>
                    Sign out
                    <FontAwesomeIcon className='faArrow' icon={solid('arrow-right-from-bracket')} />
                  </button>
                </li>
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
              <Link to=''>Change Lenguage</Link>
            </li>
            <li>
              <Link to=''>Settings</Link>
            </li>
            <li>
              <Link to=''>FAQ</Link>
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
