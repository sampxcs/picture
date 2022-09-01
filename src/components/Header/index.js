import React from 'react'
import './style.css'

import { Link } from 'wouter'

import SearchForm from '../SearchForm'
import ButtonPrimary from '../ButtonPrimary'

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
        <div className="header-mobile-nav">
          <ul>
            <li>
              <Link to="/Explore/Landscape">Landscape</Link>
            </li>
            <li>
              <Link to="/Explore/Forest">Forest</Link>
            </li>
            <li>
              <Link to="/Explore/Ocean">Ocean Life</Link>
            </li>
            <li>
              <Link to="/Explore/Sky">Sky</Link>
            </li>
            <li>
              <Link to="/Explore/Flowers">Flowers</Link>
            </li>
            <li>
              <Link to="/Explore/Seascapes%20nature">Seascapes</Link>
            </li>
            <li>
              <Link to="/Explore/Underwater">Underwater</Link>
            </li>
            <li>
              <Link to="/Explore/Cats">Cats</Link>
            </li>
            <li>
              <Link to="/Explore/Cute%20Animals">Cute Animals</Link>
            </li>
            <li>
              <Link to="/Explore/Birds%20Eye%20View">Birds Eye View</Link>
            </li>
            <li>
              <Link to="/Explore/Space">Space</Link>
            </li>
            <li>
              <Link to="/Explore/Macro">Macro</Link>
            </li>
          </ul>
        </div>
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
