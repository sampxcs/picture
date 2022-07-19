import React from 'react'
import './style.css'

export default function HamburgerMenuBar({ isActive, setIsActive }) {
  const activeMenu = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  const className = isActive ? 'hamburguer-menu-active' : 'hamburguer-menu'

  return (
    <div className={className} onClick={activeMenu}>
      <ul className='hamburguer-menu-bars'>
        <li className='bar'></li>
        <li className='bar'></li>
      </ul>
    </div>
  )
}
