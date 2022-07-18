import React from "react";
import Card from "../Card";
import "./ListOfCards.css";

export default function ListOfCards({ globalPexels }) {
  return (
    <div className="list-of-cards">
      {globalPexels.map(
        ({ id, src, photographer, photographer_url, alt, avg_color }) => (
          <Card
            className={"card-main"}
            key={id}
            id={id}
            src={src}
            photographer={photographer}
            photographer_url={photographer_url}
            alt={alt}
            avg_color={avg_color}
          />
        )
      )}
    </div>
  );
}
