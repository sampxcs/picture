import React, { useEffect, useCallback, useState } from 'react'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import debounce from 'just-debounce-it'
import usePexels from '../../hooks/usePexels'
import useNearScreen from '../../hooks/useNearScreen'

import ListOfCards from '../ListOfCards'
import GridPlaceholder from '../Placeholders/GridPlaceholder'
import Spinner from '../Spinner'
import useUser from '../../hooks/useUser'

function PexelsResults({ params }) {
  let { keyword } = params
  if (!keyword) keyword = 'Nature'

  const { loading, error, globalPexels, page, setPage } = usePexels({ keyword })
  const { user, userStatusCode } = useUser()
  //const [ready, setReady] = useState(false)

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
    //setReady(false)
    if (userStatusCode === 2 && globalPexels.length) {
      globalPexels.forEach((pexel) => {
        user.savedPexels.forEach((doc) => {
          if (doc.id === pexel.id) {
            pexel.isSaved = doc.id
          }
        })
      })
    }
  }, [userStatusCode, isNearScreen])

  useEffect(() => {
    isNearScreen && handleNextPage()
  }, [handleNextPage, isNearScreen])

  if (error) return <Redirect to="/404" />

  if (userStatusCode === 1 || (loading && page === 1)) {
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
              name="description"
              content="Free photos and videos of nature that you can use wherever you want. Search millions of high-quality, royalty-free images of beautiful nature. It is not necessary to mention the source."
            />
          </Helmet>
        ) : (
          <Helmet>
            <title>{`Nature | ${decodeURI(keyword)}`}</title>
            <meta name="description" content={`Search result of images and videos of ${keyword}`} />
          </Helmet>
        )}
        <ListOfCards globalPexels={globalPexels} />
        <Spinner />
      </>
    )
  }

  if (userStatusCode === 2)
    return (
      <>
        {keyword === 'Nature' ? (
          <Helmet>
            <title>Nature</title>
            <meta
              name="description"
              content="Free photos and videos of nature that you can use wherever you want. Search millions of high-quality, royalty-free images of beautiful nature. It is not necessary to mention the source."
            />
          </Helmet>
        ) : (
          <Helmet>
            <title>{`Nature | ${decodeURI(keyword)}`}</title>
            <meta name="description" content={`Search result of images and videos of ${keyword}`} />
          </Helmet>
        )}
        <ListOfCards globalPexels={globalPexels} />
        <div id="visor" ref={ref}></div>
      </>
    )
}
export default React.memo(PexelsResults)
