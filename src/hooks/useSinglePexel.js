import { useContext, useEffect, useState } from "react";
import getSinglePexel from "../services/getSinglePexel";
import PexelsContext from "../context/PexelsContext";

export default function useSinglePexels({ id }) {
  const { globalPexels, setGlobalPexels } = useContext(PexelsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSinglePexel({ id: id }).then((pexel) => {
      setGlobalPexels(pexel);
      setLoading(false);
    });
  }, [id]);

  return { loading, globalPexels };
}
