import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'wouter'

function Card({ id, title, src, alt, photographer, photographer_url, avg_color, className }) {
  return (
    <div className="card" style={{ backgroundColor: avg_color }}>
      <Link to={`/Detail/${id}`} className="img">
        <img src={src} alt={alt}></img>
      </Link>
      <>
        {className === 'card-main' && (
          <div className="card-info" title={alt}>
            <div className="card-info-text">
              <a className="card-link" href={photographer_url} target="_blank" rel="noopener noreferrer" title={photographer}>
                {photographer}
              </a>
              <p>{alt}</p>
            </div>
            <div className="options">
              <Link to={`/Detail/${id}`}>
                <div className="icon" title="Maximize">
                  <FontAwesomeIcon className="faMaximize" icon={solid('maximize')} />
                </div>
              </Link>
              <div className="icon" title="Save">
                <FontAwesomeIcon className="faBookmark" icon={solid('bookmark')} />
              </div>
            </div>
          </div>
        )}
        {className === 'card-detail' && (
          <div className="card-detail" title={alt}>
            <h1>CARD DETAIL</h1>
          </div>
        )}
        {className === 'card-explore' && (
          <div className="card-explore" title={alt}>
            <Link to={`/Explore/${title}`} className="card-info-explore">
              {title}
            </Link>
          </div>
        )}
      </>
    </div>
  )
}

export default React.memo(Card)
