import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/useUser'
import Card from '../Card'
import './style.css'

export default function ListOfCards({ globalPexels }) {
  const { user, getSavedPexels } = useUser()
  const [savedPexels, setSavedPexels] = useState(null)

  useEffect(() => {
    user &&
      getSavedPexels(user.uid).then((savedPexels) => {
        setSavedPexels(savedPexels)
      })
  }, [user])

  if (savedPexels && globalPexels.length)
    globalPexels.forEach((pexel) => {
      savedPexels.forEach((doc) => {
        if (doc.data.id === pexel.id) pexel.isSaved = doc.id
      })
    })

  return (
    <div className="list-of-cards">
      {savedPexels && globalPexels.length
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
