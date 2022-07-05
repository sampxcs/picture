import { createClient } from "pexels";
const client = createClient("563492ad6f91700001000001dc2729585f2b4a82b547d414ab918fbd");

export default function getPexels({ query = "Nature" } = {}) {
  return client.photos.search({ query, per_page: 12 })
    .then((response) => {
      const data = response.photos;
      const photos = data.map(photo => {
        const src = photo.src.landscape
        const id = photo.id
        const alt = photo.alt
        const photographer = photo.photographer
        const photographer_url = photo.photographer_url
        return { src, id, alt, photographer, photographer_url }
      });
      console.log(photos);
      return photos
    });
}
