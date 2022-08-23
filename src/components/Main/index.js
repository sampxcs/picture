import React from 'react'
import './style.css'

import PexelsResults from '../PexelsResults'

export default function Main({ params, id }) {
  return (
    <div className='main' id={id}>
      <PexelsResults params={params} />
    </div>
  )
}
