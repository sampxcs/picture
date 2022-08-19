import React, { useEffect } from 'react'
import Card from '../Card'
import './style.css'

export default function ListOfCards({ globalPexels, user }) {
  useEffect(() => {
    if (user && user.savedPexels && globalPexels.length)
      globalPexels.forEach((pexel) => {
        user.savedPexels.forEach((doc) => {
          if (doc.id === pexel.id) {
            pexel.isSaved = doc.id
          }
        })
      })
  }, [user])

  if (user)
    return (
      <div className="list-of-cards">
        {user.savedPexels && globalPexels.length
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
