import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const active = e => {
  e.target.classList.toggle("active")
}

export default function Card({ src, alt, photographer, photographer_url }) {
  return (
    <div className="card">
      <img src={src} alt={alt}></img>
      <div className="card-info">
        <a href={photographer_url} target='_blank' rel="noopener noreferrer">{photographer}</a>
        <p>{alt}</p>
        <FontAwesomeIcon className="faBookmark" icon={faBookmark} onClick={active} />
      </div>
    </div>
  );
}
