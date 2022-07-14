import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

function Card({ id, title, src, alt, photographer, photographer_url, avg_color, className }) {
  return (
    <div className="card" style={{ backgroundColor: avg_color }}>
      <img src={src} alt={alt}></img>
      <div className="card-info" title={alt}>
        {
          className === "card-main" && (
            <>
              <a
                className="card-link"
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
                  <div className="icon" title="Maximize">
                    <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                  </div>
                </Link>
                <div className="icon" title="Save">
                  <FontAwesomeIcon className="faBookmark" icon={faBookmark} />
                </div>
              </div>
            </>
          )
        }
        {
          className === "card-detail" && (
            <>
              <h1>CARD DETAIL</h1>
            </>
          )
        }
        {
          className === "card-explore" && (
            <>
              <Link to={`/Explore/${title}`} className="card-info-explore">{title}</Link>
            </>
          )
        }
      </div>
    </div>
  );
}

export default React.memo(Card)
