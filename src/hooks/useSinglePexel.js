import { useContext, useEffect, useState } from "react";
import getSinglePexel from "../services/getSinglePexel";
import PexelsContext from "../context/PexelsContext";

export default function useSinglePexels({ id }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true);
    getSinglePexel({ id: id }).then((pexel) => {
      setGlobalPexels(pexel);
      setLoading(false)
      setError(false)
    }).catch(error => {
      setLoading(false)
      setError(true)
      console.log('errrorrr');
    })
  }, [id]);

  return { loading, error, globalPexels };
}
