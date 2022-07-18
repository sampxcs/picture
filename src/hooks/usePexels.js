import { useContext, useEffect, useState } from "react";
import getPexels from "../services/getPexels";
import PexelsContext from "../context/PexelsContext";

const initialPage = 1;

export default function usePexels({ keyword }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isNextPage, setIsNextPage] = useState(true);

  useEffect(() => {
    setIsNextPage(true);
    setLoading(true);
    getPexels({ query: keyword }).then((data) => {
      const globalPexels = data.photos;
      if (globalPexels.length) {
        setGlobalPexels(globalPexels);
        setLoading(false);
        setError(false);
      } else {
        setLoading(false)
        setError(true)
      }
    });
  }, [keyword]);

  useEffect(() => {
    if (isNextPage) {
      setLoading(true);
      if (page === initialPage) return;
      getPexels({ query: keyword, page: page }).then((data) => {
        const nextGlobalPexels = data.photos;
        if (!data.next_page) setIsNextPage(false);
        setGlobalPexels((prevGlobalPexels) =>
          prevGlobalPexels.concat(nextGlobalPexels)
        );
        setLoading(false);
      });
    }
  }, [page]);

  return { loading, error, globalPexels, page, setPage };
}
