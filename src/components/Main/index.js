import React from 'react'
import PexelsResults from '../PexelsResults'
import './style.css'

export default function Main({ params, user, id }) {
  return (
    <div className="main" id={id}>
      <PexelsResults params={params} user={user} />
    </div>
  )
}
