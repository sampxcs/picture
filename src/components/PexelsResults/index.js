import React, { useEffect, useCallback } from 'react'
import ListOfCards from '../ListOfCards'
import usePexels from '../../hooks/usePexels'
import GridPlaceholder from '../Placeholders/GridPlaceholder'
import GridPlaceholderMobile from '../Placeholders/GridPlaceholderMobile'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

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
      setPage()
    }, 200),
    []
  )

  useEffect(() => {
    isNearScreen && handleNextPage()
  }, [handleNextPage, isNearScreen])

  if (error) return <Redirect to="/404" />

  if (loading && page === 1) {
    return (
      <>
        <Helmet>
          <title>{`Loading...`}</title>
        </Helmet>
        {window.innerWidth > 660 ? <GridPlaceholder /> : <GridPlaceholderMobile />}
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
        <GridPlaceholder />
      </>
    )
  }

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
