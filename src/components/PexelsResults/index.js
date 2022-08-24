import React, { useEffect, useCallback } from 'react'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import { useLocation } from 'wouter'

import debounce from 'just-debounce-it'
import usePexels from '../../hooks/usePexels'
import useCuratedPexels from '../../hooks/useCuratedPexels'
import useNearScreen from '../../hooks/useNearScreen'

import ListOfCards from '../ListOfCards'
import GridPlaceholder from '../Placeholders/GridPlaceholder'
import Spinner from '../Spinner'

function PexelsResults({ params }) {
  const [location] = useLocation()
  let { keyword } = params

  const { loading, error, globalPexels, page, setPage } = location === '/' ? useCuratedPexels({}) : usePexels({ keyword })

  const { isNearScreen, ref } = useNearScreen({
    distance: '600px',
    once: false,
  })

  const handleNextPage = useCallback(
    debounce(() => {
      setPage()
    }, 200),
    []
  )

  useEffect(() => {
    isNearScreen && handleNextPage()
  }, [handleNextPage, isNearScreen])

  if (error) return <Redirect to='/404' />

  if (loading && page === 1) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <GridPlaceholder />
      </>
    )
  }

  if (loading && page > 1) {
    return (
      <>
        {location === '/' ? (
          <Helmet>
            <title>Picture</title>
            <meta
              name='description'
              content='Free photos and videos of nature that you can use wherever you want. Search millions of high-quality, royalty-free images of beautiful nature. It is not necessary to mention the source.'
            />
          </Helmet>
        ) : (
          <Helmet>
            <title>{`Nature | ${decodeURI(keyword)}`}</title>
            <meta name='description' content={`Search result of images and videos of ${keyword}`} />
          </Helmet>
        )}
        <ListOfCards globalPexels={globalPexels} />
        <Spinner />
      </>
    )
  }

  if (!loading)
    return (
      <>
        {location === '/' ? (
          <Helmet>
            <title>Picture</title>
            <meta
              name='description'
              content='Free photos and videos of everything that you can use wherever you want. Search millions of high-quality, royalty-free images of beautiful nature. It is not necessary to mention the source.'
            />
          </Helmet>
        ) : (
          <Helmet>
            <title>{`Picture | ${decodeURI(keyword)}`}</title>
            <meta name='description' content={`Search result of images and videos of ${keyword}`} />
          </Helmet>
        )}
        <ListOfCards globalPexels={globalPexels} />
        <div id='visor' ref={ref}></div>
      </>
    )
}
export default React.memo(PexelsResults)
