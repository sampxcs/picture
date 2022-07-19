import React from 'react'
import './style.css'
import plantImg from './tree.png'
import SearchForm from '../SearchForm'

export default function Header() {
  return (
    <header>
      <div className='header-title'>
        <h1>
          <span>N</span>A<span>T</span>U<span>R</span>E
        </h1>
        <h3>The Beauty of Everything</h3>
        <img src={plantImg} alt='Nature' title='Nature' className='img-plant-01' />
        <img src={plantImg} alt='Nature' title='Nature' className='img-plant-02' />
        <img src={plantImg} alt='Nature' title='Nature' className='img-plant-03' />
        <img src={plantImg} alt='Nature' title='Nature' className='img-plant-04' />
      </div>
      <SearchForm className={'header-form'} />
    </header>
  )
}
