import React, { useEffect, useCallback } from 'react'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import debounce from 'just-debounce-it'
import usePexels from '../../hooks/usePexels'
import useNearScreen from '../../hooks/useNearScreen'

import ListOfCards from '../ListOfCards'
import GridPlaceholder from '../Placeholders/GridPlaceholder'
import Spinner from '../Spinner'

function PexelsResults({ params }) {
  let { keyword } = params
  if (!keyword) keyword = 'Nature'
  const { loading, error, globalPexels, page, setPage } = usePexels({ keyword })

  const { isNearScreen, ref } = useNearScreen({
    distance: '400px',
    once: false,
  })

  const handleNextPage = useCallback(
    debounce(() => {
      console.log('set page')
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
          <title>{`Loading...`}</title>
        </Helmet>
        <GridPlaceholder />
      </>
    )
  }

  if (loading && page > 1) {
    return (
      <>
        {keyword === 'Nature' ? (
          <Helmet>
            <title>Nature</title>
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

  return (
    <>
      {keyword === 'Nature' ? (
        <Helmet>
          <title>Nature</title>
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
      <div id='visor' ref={ref}></div>
    </>
  )
}
export default React.memo(PexelsResults)
