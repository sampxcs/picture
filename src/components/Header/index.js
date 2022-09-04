import React from 'react'
import './style.css'

import SearchForm from '../SearchForm'
import HeaderMobileNav from '../HeaderMobileNav'

export default function Header() {
  return (
    <>
      <header>
        <div className="header-primary">
          <div className="header-title">
            <h1>Picture</h1>
            <h3>The Beauty of Everything</h3>
          </div>
          <SearchForm formHeader={true} />
        </div>
        <HeaderMobileNav />
        <div className="header-background-container">
          <img
            className="header-background"
            src="https://images.pexels.com/photos/2854418/pexels-photo-2854418.jpeg?auto=compress&cs=tinysrgb&w=6000&lazy=load"
          />
        </div>
      </header>
    </>
  )
}
