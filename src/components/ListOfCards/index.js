import React from "react";
import Card from "../Card";
import "./ListOfCards.css";

export default function ListOfCards({ globalPexels }) {
  return (
    <>
      {globalPexels.length ? (
        <div className="list-of-cards">
          {globalPexels.map(({ id, src, photographer, photographer_url, alt }) => (
            <Card
              key={id}
              id={id}
              src={src}
              photographer={photographer}
              photographer_url={photographer_url}
              alt={alt}
            />
          ))}
        </div>
      ) : (
        <div className="no-data">
          <h2>404 NO RESULTS :(</h2>
        </div>
      )}
    </>
  );
}
