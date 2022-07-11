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
    getPexels({ query: keyword, page: page }).then((nextGlobalPexels) => {
      setGlobalPexels(prevGlobalPexels => prevGlobalPexels.concat(nextGlobalPexels));
    })

  }, [page])

  return { loading, globalPexels, setPage };
}
