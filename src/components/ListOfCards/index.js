import React, { useEffect, useState } from 'react'
import './style.css'

import Card from '../Card'

export default function ListOfCards({ globalPexels }) {
  return (
    <div className="list-of-cards">
      {globalPexels.length
        ? globalPexels.map(({ id, src, photographer, photographer_url, alt, avg_color, isSaved }) => (
            <>
              <Card
                className={'card-main'}
                key={id}
                id={id}
                src={src}
                photographer={photographer}
                photographer_url={photographer_url}
                alt={alt}
                avg_color={avg_color}
                isSaved={isSaved}
              />
            </>
          ))
        : null}
    </div>
  )
}
