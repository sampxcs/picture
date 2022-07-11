import React from "react";
import ListOfCards from "../ListOfCards";
import usePexels from "../../hooks/usePexels";
import GridLoader from "../GridLoader";

export default function PexelsResults({ params }) {
  let { keyword } = params;
  if (!keyword) keyword = "Nature";
  const { loading, globalPexels, setPage } = usePexels({ keyword });
  
  const handleNextPage = () => {
    console.log("next page");
    setPage(prevPage => prevPage + 1)
  };

  return (
    <>
      {loading ? (
        <GridLoader />
      ) : (
        <>
          <ListOfCards globalPexels={globalPexels} />
          <button onClick={handleNextPage}>Next Page</button>
        </>
      )}
    </>
  );
}
