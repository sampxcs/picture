import React, { useState } from 'react'
import './style.css'

import { useLocation } from 'wouter'
import classNames from 'classnames'

import ButtonCircle from '../ButtonCircle'

export default function SearchForm({ formHeader, formNav }) {
  const [keyword, setKeyword] = useState('')
  const [active, setActive] = useState(false)
  const [, pushLocation] = useLocation()

  const CLASSNAMES = classNames({
    'search-form': true,
    'search-form-header': formHeader,
    'search-form-nav': formNav,
    active: active,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/Explore/${keyword}`)
    setKeyword('')
    setActive(false)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handelClick = (e) => {
    e.preventDefault()
    keyword ? handleSubmit(e) : active ? setActive(false) : setActive(true)
  }

  return (
    <form className={CLASSNAMES} onSubmit={handleSubmit}>
      <input onChange={handleChange} value={keyword} name='search' type='search' placeholder='Search' />
      <ButtonCircle onClick={handelClick}>
        <div className='search-icon'>
          <span className='search-icon-circle'></span>
          <span className='search-icon-line'></span>
        </div>
      </ButtonCircle>
    </form>
  )
}
