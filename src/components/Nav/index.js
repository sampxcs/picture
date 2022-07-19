import React, { useContext, useState } from 'react'
import './style.css'
import SearchForm from '../SearchForm'
import NavList from '../NavList'
import { Link } from 'wouter'
import HamburgerMenuBar from '../HamburguerMenuBar'
import ActiveContext, { ActiveContextProvaider } from '../../context/ActiveContext'

export default function Nav() {
  const { isActive, setIsActive } = useContext(ActiveContext)
  console.log(isActive)
  return (
    <nav>
      <HamburgerMenuBar isActive={isActive} setIsActive={setIsActive} />
      <Link to='/' className='nav-logo' title='Nature'>
        NATURE
      </Link>
      <NavList isActive={isActive} />
      <SearchForm className={'nav-form'} />
    </nav>
  )
}
