import React from 'react'
import './style.css'

export default function ButtonPrimary({ children, type, onClick, disabled, name }) {
  return (
    <button className='btn-primary' name={name} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
