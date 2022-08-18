import React, { useRef } from 'react'
import ButtonCircle from '../ButtonCircle'
import './style.css'

export default function HamburgerMenu({ isActive, setIsActive }) {
  const activeMenu = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  const ref = useRef()
  const element = ref.current

  if (isActive) element && element.classList.add('hamburguer-menu-active')
  else element && element.classList.remove('hamburguer-menu-active')

  return (
    <ButtonCircle>
      <div className="hamburguer-menu" ref={ref} onClick={activeMenu}>
        <ul className="hamburguer-menu-bars">
          <li className="bar"></li>
          <li className="bar"></li>
        </ul>
      </div>
    </ButtonCircle>
  )
}
