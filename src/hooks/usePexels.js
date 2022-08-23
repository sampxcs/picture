import { useContext, useEffect } from 'react'
import getPexels from '../services/getPexels'
import PexelsContext from '../context/PexelsContext'
import useStates from './useStates'
import useUser from './useUser'

export default function usePexels({ keyword }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext)
  const { page, isNextPage, loading, error, setPage, setIsNextPage, setLoading, setError } = useStates()
  const { user, userStatusCode } = useUser()

  const addSavedPexels = async (globalPexels) => {
    await globalPexels.forEach((pexel) => {
      user.savedPexels.forEach((doc) => {
        if (doc.id === pexel.id) {
          pexel.isSaved = doc.id
        }
      })
    })
  }

  useEffect(() => {
    setIsNextPage(true)
    setLoading(true)
    getPexels({ query: keyword })
      .then((data) => {
        const globalPexels = data.photos
        if (globalPexels.length) {
          if (userStatusCode === 2) {
            addSavedPexels(globalPexels).then(() => {
              setLoading(false)
              setGlobalPexels(globalPexels)
              setError(false)
            })
          }
          if (userStatusCode === 3) {
            setLoading(false)
            setGlobalPexels(globalPexels)
            setError(false)
          }
        } else {
          setError(true)
        }
      })
      .catch((e) => {
        setError(e)
      })
  }, [keyword, userStatusCode])

  useEffect(() => {
    if (isNextPage) {
      setLoading(true)
      if (page === 1) return
      getPexels({ query: keyword, page: page }).then((data) => {
        const nextGlobalPexels = data.photos
        if (userStatusCode === 2)
          addSavedPexels(nextGlobalPexels).then(() => {
            setLoading(false)
            if (!data.next_page) setIsNextPage(true)
            setGlobalPexels((prevGlobalPexels) => prevGlobalPexels.concat(nextGlobalPexels))
            setError(false)
          })
        if (userStatusCode === 3) {
          setLoading(false)
          if (!data.next_page) setIsNextPage(true)
          setGlobalPexels((prevGlobalPexels) => prevGlobalPexels.concat(nextGlobalPexels))
          setError(false)
        }
      })
    }
  }, [page])

  return { loading, error, globalPexels, page, setPage }
}
