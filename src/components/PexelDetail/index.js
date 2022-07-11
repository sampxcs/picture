import React from "react";
import Card from "../Card";
import Spinner from "../Spinner";
import useSinglePexel from "../../hooks/useSinglePexel";
import useGlobalPexels from "../../hooks/useGlobalPexels";
import "./PexelDetail.css";

export default function PexelDetail({ params }) {
  const { id } = params;
  const globalPexels = useGlobalPexels();

  if (globalPexels.length) {
    const pexel = globalPexels.find((pexel) => pexel.id == id);
    const { src, photographer, photographer_url, alt } = pexel;
    return (
      <div className="detail-container">
        <Card
          key={id}
          id={id}
          src={src}
          photographer={photographer}
          photographer_url={photographer_url}
          alt={alt}
        />
      </div>
    );
  } else {
    const { loading, globalPexels } = useSinglePexel({ id: id });

    if (loading) {
      return <Spinner/>;
    } else {
      const { src, photographer, photographer_url, alt } = globalPexels;
      return (
        <div className="detail-container">
          <Card
            key={id}
            id={id}
            src={src}
            photographer={photographer}
            photographer_url={photographer_url}
            alt={alt}
          />
        </div>
      );
    }
  }
}
