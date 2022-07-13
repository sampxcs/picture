import { client } from "./settings";

export default function getPexels({ query, page = 1 } = {}) {
  return client.photos.search({ query, per_page: 12, page: page })
    .then((response) => {
      const photos = response.photos.map(photo => {
        const src = photo.src.landscape
        const { id, alt, photographer, photographer_url, avg_color} = photo
        return { src, id, alt, photographer, photographer_url, avg_color }
      });
      const { next_page } = response
      const data = { next_page, photos };
      return data
    });
}
