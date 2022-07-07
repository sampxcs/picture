import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const active = e => {
  e.target.classList.toggle("active")
}

export default function Card({ id, src, alt, photographer, photographer_url }) {
  return (
    <a href={"#" + id} className="card">
      <img src={src}></img>
      <div className="card-info">
        <h2 href={photographer_url} target='_blank'>{photographer}</h2>
        <p>{alt}</p>
        <FontAwesomeIcon className="faBookmark" icon={faBookmark} onClick={active} />
      </div>
    </a>
  );
}
