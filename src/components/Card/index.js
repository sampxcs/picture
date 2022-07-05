import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const active = e => {
  e.target.classList.toggle("active")
}

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.src}></img>
      <div className="card-info">
        <a href={props.photographer_url} target='_blank'>{props.photographer}</a>
        <p>{props.alt}</p>
        <FontAwesomeIcon className="faBookmark" icon={faBookmark} onClick={active}/>
      </div>
    </div>
  );
}
