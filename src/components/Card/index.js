import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export default function Card({ id, src, alt, photographer, photographer_url }) {
  return (
    <div className="card">
      <img src={src} alt={alt}></img>
      <div className="card-info" title={alt}>
        <a
          href={photographer_url}
          target="_blank"
          rel="noopener noreferrer"
          title={photographer}
        >
          {photographer}
        </a>
        <p>{alt}</p>
        <div className="options">
          <Link to={`/Detail/${id}`}>
            <a className="icon" title="Maximize">
              <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
            </a>
          </Link>
          <div className="icon" title="Save">
            <FontAwesomeIcon className="faBookmark" icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
