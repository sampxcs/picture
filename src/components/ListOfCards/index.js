import React, { useEffect, useState } from 'react'
import './style.css'

import useUser from '../../hooks/useUser'
import Card from '../Card'

export default function ListOfCards({ globalPexels }) {
  const { user, userStatusCode } = useUser()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (userStatusCode === 2 && globalPexels.length)
      globalPexels.forEach((pexel) => {
        user.savedPexels.forEach((doc) => {
          if (doc.id === pexel.id) {
            pexel.isSaved = doc.id

            setReady(true)
          }
        })
      })
  }, [userStatusCode])

  if (userStatusCode === 1) return null

  if (userStatusCode === 2 && ready)
    return (
      <div className='list-of-cards'>
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

  if (userStatusCode === 3)
    return (
      <div className='list-of-cards'>
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
