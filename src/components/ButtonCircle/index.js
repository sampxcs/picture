import React from 'react'
import classNames from 'classnames'
import './style.css'

export default function ButtonCircle({ children, type, onClick, disabled, name, title, blur }) {
  const CLASSNAMES = classNames({
    'btn-circle': true,
    blur: blur,
  })
  return (
    <button className={CLASSNAMES} name={name} title={title} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  )
}