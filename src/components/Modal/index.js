import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Modal({ close, children }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={close} className={'btn-close-modal'}>
          <FontAwesomeIcon className='faXmark' icon={faXmark} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ close, children }) {
  return ReactDom.createPortal(<Modal close={close}>{children}</Modal>, document.querySelector('#root'))
}
