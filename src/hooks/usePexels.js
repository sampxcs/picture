import { useContext, useEffect, useState } from "react";
import getPexels from "../services/getPexels";
import PexelsContext from "../context/PexelsContext";

const initialPage = 1

export default function usePexels({ keyword }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext);
  const [ page, setPage ] = useState(initialPage)
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPexels({ query: keyword }).then((globalPexels) => {
      setGlobalPexels(globalPexels);
      setLoading(false);
    });
  }, [keyword]);

  useEffect(() => {
    if (page === initialPage) return
    setLoading(true)
    getPexels({ query: keyword, page: page }).then((nextGlobalPexels) => {
      console.log(nextGlobalPexels);
      setGlobalPexels(prevGlobalPexels => prevGlobalPexels.concat(nextGlobalPexels));
      setLoading(false)
    })

  }, [page])

  return { loading, globalPexels, setPage };
}
