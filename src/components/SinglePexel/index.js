import React from 'react'
import Card from '../Card'
import Spinner from '../Spinner'
import useSinglePexel from '../../hooks/useSinglePexel'
import useGlobalPexels from '../../hooks/useGlobalPexels'
import './style.css'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

export default function SinglePexel({ params }) {
  const { id } = params
  const globalPexels = useGlobalPexels()

  if (globalPexels.length) {
    const pexel = globalPexels.find((pexel) => pexel.id === parseInt(id))
    const { src, photographer, photographer_url, alt, avg_color } = pexel
    console.log(pexel)
    return (
      <>
        <Helmet>
          <title>{`Nature | ${alt}`}</title>
        </Helmet>
        <div className="detail-container">
          <div>
            <Card
              className={'card-main'}
              key={id}
              id={id}
              src={src}
              photographer={photographer}
              photographer_url={photographer_url}
              alt={alt}
              avg_color={avg_color}
            />
          </div>
        </div>
      </>
    )
  } else {
    const { loading, error, globalPexels } = useSinglePexel({ id })

    if (error) return <Redirect to="/404" />

    if (loading) {
      return (
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Spinner />
        </>
      )
    } else {
      console.log(loading, error, globalPexels)
      const { src, photographer, photographer_url, alt, avg_color } = globalPexels

      return (
        <>
          <Helmet>
            <title>{`Nature | ${id}`}</title>
          </Helmet>
          <div className="detail-container">
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
              />
            </div>
          </div>
        </>
      )
    }
  }
}
