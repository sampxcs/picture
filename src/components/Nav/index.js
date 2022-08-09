import React, { useEffect, useState } from 'react'
import './style.css'
import SearchForm from '../SearchForm'
import NavList from '../NavList'
import { Link, useLocation } from 'wouter'
import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  const [backgroundNav, setBackgroundNav] = useState('transparent')
  const [location] = useLocation()

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setBackgroundNav('var(--light-letter)') : setBackgroundNav('transparent')
  })

  useEffect(() => {
    window.scroll({ top: 0 })
    setIsActive(false)
  }, [location])

  return (
    <nav style={{ backgroundColor: backgroundNav }}>
      <div className="nav-container">
        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
        <Link to="/" className="nav-logo" title="Nature">
          NATURE
        </Link>
        <NavList isActive={isActive} />
        <SearchForm formNav={true} />
      </div>
    </nav>
  )
}
