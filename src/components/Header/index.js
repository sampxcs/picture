import React from 'react'
import './style.css'

import { Link } from 'wouter'

import SearchForm from '../SearchForm'
import ButtonPrimary from '../ButtonPrimary'

export default function Header() {
  return (
    <>
      <header>
        <div className="header-title">
          <h1>
            <span>P</span>i<span>c</span>t<span>ur</span>e
          </h1>
          <h3>The Beauty of Everything</h3>
          <img src="/tree.png" alt="Nature" title="Nature" className="img-plant-01" />
          <img src="/tree.png" alt="Nature" title="Nature" className="img-plant-02" />
          <img src="/tree.png" alt="Nature" title="Nature" className="img-plant-03" />
          <img src="/tree.png" alt="Nature" title="Nature" className="img-plant-04" />
        </div>
        <SearchForm formHeader={true} />
      </header>
    </>
  )
}
