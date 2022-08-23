import React from 'react'
import './style.css'

import { Link } from 'wouter'

import SearchForm from '../SearchForm'
import ButtonPrimary from '../ButtonPrimary'

export default function Header() {
  return (
    <>
      <header>
        <div className='header-title'>
          <h1>
            <span>N</span>A<span>T</span>U<span>R</span>E
          </h1>
          <h3>The Beauty of Everything</h3>
          <img src='/tree.png' alt='Nature' title='Nature' className='img-plant-01' />
          <img src='/tree.png' alt='Nature' title='Nature' className='img-plant-02' />
          <img src='/tree.png' alt='Nature' title='Nature' className='img-plant-03' />
          <img src='/tree.png' alt='Nature' title='Nature' className='img-plant-04' />
        </div>
        <SearchForm formHeader={true} />
      </header>
      <div className='header-nav'>
        <Link to='/'>
          <ButtonPrimary name='active'>Home</ButtonPrimary>
        </Link>
        <Link to='/explore'>
          <ButtonPrimary>Explore</ButtonPrimary>
        </Link>
        <Link to='/profile'>
          <ButtonPrimary>Your Collections</ButtonPrimary>
        </Link>
      </div>
    </>
  )
}
