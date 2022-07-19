import React, { useState } from 'react'
import './style.css'
import SearchForm from '../SearchForm'
import NavList from '../NavList'
import { Link } from 'wouter'
import HamburgerMenu from '../HamburguerMenu'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
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
