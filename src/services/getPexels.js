import { client } from "./settings";

export default function getPexels({ query, page = 1 } = {}) {
  return client.photos.search({ query, per_page: 24, page: page })
    .then((response) => {
      const data = response.photos;
      const photos = data.map(photo => {
        const src = photo.src.landscape
        const { id, alt, photographer, photographer_url} = photo
        return { src, id, alt, photographer, photographer_url }
      });
      return photos
    });
}
