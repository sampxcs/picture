import React from "react";
import Card from "../Card";
import Spinner from "../Spinner";
import useSinglePexel from "../../hooks/useSinglePexel";
import useGlobalPexels from "../../hooks/useGlobalPexels";
import "./PexelDetail.css";

export default function PexelDetail({ params }) {
  const { id } = params;
  const globalPexels = useGlobalPexels();

  console.log(globalPexels);

  if (globalPexels.length) {
    const pexel = globalPexels.find((pexel) => pexel.id === parseInt(id));
    const { src, photographer, photographer_url, alt, avg_color } = pexel;
    return (
      <div className="detail-container">
        <div>
          <Card
            key={id}
            id={id}
            src={src}
            photographer={photographer}
            photographer_url={photographer_url}
            alt={alt}
            avg_color={avg_color}
          />
        </div>
      </div>
    );
  } else {
    const { loading, globalPexels } = useSinglePexel({ id: id });

    if (loading) {
      return <Spinner />;
    } else {
      const { src, photographer, photographer_url, alt, avg_color } = globalPexels;
      return (
        <div className="detail-container">
          <div>
            <Card
              className={"card-detail"}
              key={id}
              id={id}
              src={src}
              photographer={photographer}
              photographer_url={photographer_url}
              alt={alt}
              avg_color={avg_color}
            />
          </div>
        </div>
      );
    }
  }
}
