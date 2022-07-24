import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'

function Modal({ close, children }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={close} className={'btn-close-modal'}>
          <FontAwesomeIcon className='faXmark' icon={solid('xMark')} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ close, children }) {
  return ReactDom.createPortal(<Modal close={close}>{children}</Modal>, document.querySelector('#root'))
}
