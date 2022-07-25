import React, { useEffect, useState } from 'react'
import './style.css'
import SearchForm from '../SearchForm'
import NavList from '../NavList'
import { Link, useLocation } from 'wouter'
import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    window.scroll({ top: 0 })
    setIsActive(false)
  }, [location])

  return (
    <nav>
      <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      <Link to="/" className="nav-logo" title="Nature">
        NATURE
      </Link>
      <NavList isActive={isActive} />
      <SearchForm className={'nav-form'} />
    </nav>
  )
}
