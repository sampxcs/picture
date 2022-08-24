import { client } from './settings'

export default function getCuratedPexels({ page = 1 } = {}) {
  return client.photos.curated({ per_page: 6, page: page }).then((response) => {
    const photos = response.photos.map((photo) => {
      const src = photo.src.portrait
      const { id, alt, photographer, photographer_url, avg_color } = photo
      return { src, id, alt, photographer, photographer_url, avg_color }
    })
    const { next_page } = response
    const data = { next_page, photos }
    return data
  })
}
