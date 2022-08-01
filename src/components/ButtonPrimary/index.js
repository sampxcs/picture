import React from 'react'
import './style.css'

export default function ButtonPrimary({ children, type, onClick }) {
  return (
    <button className="btn-primary" type={type} onClick={onClick}>
      {children}
    </button>
  )
}
