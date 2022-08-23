import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import ButtonCircle from '../ButtonCircle'
import Card from '../Card'

export default function Collection({ title, data, className }) {
  return (
    <>
      <div className='collection-title'>
        {title}
        <div className='scroll-btns-container'>
          <ButtonCircle>
            <FontAwesomeIcon icon={faAngleLeft} />
          </ButtonCircle>
          <ButtonCircle>
            <FontAwesomeIcon icon={faAngleRight} />
          </ButtonCircle>
        </div>
      </div>
      <div className='collection-container'>
        <div className='collection-content'>
          {data.map(({ title, id, src, alt, avg_color, photographer, photographer_url }) => (
            <div className='collection-card' key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
                photographer={photographer}
                photographer_url={photographer_url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
