import React from 'react'
import './style.css'

export default function ButtonPrimary({ children, type, onClick, disabled }) {
  return (
    <button className='btn-primary' disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
