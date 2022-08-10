import React from 'react'
import Card from '../Card'
import ButtonCircle from '../ButtonCircle'
import './style.css'

export default function CollectionProfile({ savedPexels }) {
  return (
    <div className="profile-collections">
      <h2>
        <span>Your Collections</span>
      </h2>
      <h3>Saved</h3>
      {savedPexels ? (
        <div className="profile-collections-content">
          {savedPexels.map((pexel) => {
            return (
              <Card
                className={'card-saved'}
                key={pexel.pexelId}
                id={pexel.pexelId}
                src={pexel.src}
                photographer={pexel.photographer}
                photographer_url={pexel.photographer_url}
                alt={pexel.alt}
                avg_color={pexel.avg_color}
              />
            )
          })}
        </div>
      ) : (
        <div className="profile-collections-content"></div>
      )}
      <div className="profile-add-content">
        <ButtonCircle title="Add Description">+</ButtonCircle>
      </div>
    </div>
  )
}
