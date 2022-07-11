import { client } from "./settings";

export default function getSinglePexel({ id } = {}) {
  return client.photos.show({ id: id }).then((response) => {
    const src = response.src.landscape;
    const { id, alt, photographer, photographer_url } = response;
    const pexel = { src, id, alt, photographer, photographer_url };
    return pexel;
  });
}
