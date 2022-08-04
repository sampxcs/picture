import React from 'react'
import PexelsResults from '../PexelsResults'
import './style.css'

export default function Main({ params, title }) {
  return (
    <div className="main">
      {title ? <h1 className="main-title">{title}</h1> : null}
      <PexelsResults params={params} />
    </div>
  )
}
