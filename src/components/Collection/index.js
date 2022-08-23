import React, { useRef } from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import ButtonCircle from '../ButtonCircle'
import Card from '../Card'

export default function Collection({ title, data, className }) {
  const ref = useRef()
  return (
    <>
      <div className="collection-title">
        {title}
        <div className="scroll-btns-container">
          <ButtonCircle onClick={() => (ref.current.scrollLeft = ref.current.scrollLeft - 800)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </ButtonCircle>
          <ButtonCircle onClick={() => (ref.current.scrollLeft = ref.current.scrollLeft + 800)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </ButtonCircle>
        </div>
      </div>
      <div className="collection-container">
        <div className="collection-content" ref={ref}>
          {data.map(({ title, id, src, alt, avg_color, photographer, photographer_url }) => (
            <div className="collection-card" key={id}>
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
