import React from 'react'
import './style.css'

import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Settings() {
  return (
    <div className='change-lenguage-form'>
      <h2>Select Lenguage:</h2>
      <ul>
        <li>
          <Link to='/'>
            English <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/es-es'>
            Español <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/pt-br'>
            Português <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/de-de'>
            Deutsch <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/it-it'>
            Italiano <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/fr-fr'>
            français <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/ja-jp'>
            日本 <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/ko-kr'>
            한국인 <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
        <li>
          <Link to='/zh-cn'>
            中國人 <FontAwesomeIcon className='icon' icon={faArrowLeft} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
