import { useContext, useEffect, useState } from 'react'
import getSinglePexel from '../services/getSinglePexel'
import PexelsContext from '../context/PexelsContext'
import getPexelsByIds from '../services/getPexelsByIds'

export default function usePexelsByIds({ ids }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  console.log('Ids ===> ', ids)

  /* useEffect(() => {
    setLoading(true)
    getPexelsByIds({ ids: ids })
      .then((pexels) => {
        setGlobalPexels(pexels)
        setLoading(false)
        setError(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [ids]) */

  return { globalPexels }
} /*
const pexels = [
  {
    src: 'https://images.pexels.com/photos/3408744/pexels-ph…g?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    id: 3408744,
    alt: 'Scenic View Of Snow Capped Mountains During Night',
    photographer: 'stein egil liland',
    photographer_url: 'https://www.pexels.com/@therato',
  },
  {
    src: 'https://images.pexels.com/photos/2662116/pexels-ph…g?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    id: 2662116,
    alt: 'Beautiful View of Moraine Lake',
    photographer: 'Jaime Reimer',
    photographer_url: 'https://www.pexels.com/@jaime-reimer-1376930',
  },
  {
    src: 'https://images.pexels.com/photos/1802268/pexels-ph…g?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    id: 1802268,
    alt: 'Blue and White Abstract Painting',
    photographer: 'Ricardo Esquivel',
    photographer_url: 'https://www.pexels.com/@rickyrecap',
  },
  {
    src: 'https://images.pexels.com/photos/15286/pexels-phot…g?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    id: 15286,
    alt: 'Person Walking Between Green Forest Trees',
    photographer: 'Luis del Río',
    photographer_url: 'https://www.pexels.com/@luisdelrio',
  },
] */
