import React from 'react'
import './style.css'

export default function ButtonPrimary({ children, type, onClick, disabled, active }) {
  return (
    <button className="btn-primary" aria-selected={active} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
