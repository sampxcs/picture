import React, { useState, useEffect } from 'react'
import Card from '../Card'
import Spinner from '../Spinner'
import useSinglePexel from '../../hooks/useSinglePexel'
import useGlobalPexels from '../../hooks/useGlobalPexels'
import useUser from '../../hooks/useUser'
import './style.css'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

export default function SinglePexel({ params }) {
  const { id } = params
  const globalPexels = useGlobalPexels()
  const { user } = useUser()
  const [savedPexels] = useState(null)

  if (user && user.savedPexels && globalPexels.length) {
    globalPexels.forEach((pexel) => {
      user.savedPexels.forEach((doc) => {
        if (doc.id === pexel.id) pexel.isSaved = doc.id
      })
    })
  }
  if (user && user.savedPexels) {
    user.savedPexels.forEach((doc) => {
      if (doc.id === globalPexels.id) globalPexels.isSaved = doc.id
    })
  }

  if (globalPexels && globalPexels.length) {
    const pexel = globalPexels.find((pexel) => pexel.id === parseInt(id))
    const { src, photographer, photographer_url, alt, avg_color, isSaved } = pexel
    console.log(pexel)
    return (
      <>
        <Helmet>
          <title>{`Nature | ${alt}`}</title>
        </Helmet>
        <div className='single-pexel-container'>
          <div>
            <Card
              className={'card-detail'}
              key={id}
              id={id}
              src={src}
              photographer={photographer}
              photographer_url={photographer_url}
              alt={alt}
              avg_color={avg_color}
              isSaved={isSaved}
            />
          </div>
        </div>
      </>
    )
  } else {
    const { loading, error, globalPexels } = useSinglePexel({ id })

    if (error) return <Redirect to='/404' />

    if (loading) {
      return (
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <div className='spinner-container'>
            <Spinner />
          </div>
        </>
      )
    } else if (user && user.savedPexels) {
      console.log(loading, error, globalPexels)
      const { src, photographer, photographer_url, alt, avg_color, isSaved } = globalPexels

      return (
        <>
          <Helmet>
            <title>{`Nature | ${id}`}</title>
          </Helmet>
          <div className='single-pexel-container'>
            <div>
              <Card
                className={'card-detail'}
                key={id}
                id={id}
                src={src}
                photographer={photographer}
                photographer_url={photographer_url}
                alt={alt}
                avg_color={avg_color}
                isSaved={isSaved}
              />
            </div>
          </div>
        </>
      )
    }
  }
}
