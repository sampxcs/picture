import { useContext, useEffect } from 'react'
import getPexels from '../services/getPexels'
import PexelsContext from '../context/PexelsContext'
import useStates from './useStates'

export default function usePexels({ keyword }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext)
  const { page, isNextPage, loading, error, setPage, setIsNextPage, setLoading, setError } = useStates()

  useEffect(() => {
    setIsNextPage(true)
    setLoading(true)
    getPexels({ query: keyword }).then((data) => {
      const globalPexels = data.photos
      if (globalPexels.length) {
        setGlobalPexels(globalPexels)
        setLoading(false)
        setError(false)
      } else {
        setLoading(false)
        setError(true)
      }
    })
  }, [keyword])

  useEffect(() => {
    if (isNextPage) {
      setLoading(true)
      if (page === 1) return
      getPexels({ query: keyword, page: page }).then((data) => {
        const nextGlobalPexels = data.photos
        if (!data.next_page) setIsNextPage(true)
        setGlobalPexels((prevGlobalPexels) => prevGlobalPexels.concat(nextGlobalPexels))
        setLoading(false)
      })
    }
  }, [page])

  return { loading, error, globalPexels, page, setPage }
}
