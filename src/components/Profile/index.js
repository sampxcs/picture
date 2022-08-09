import React, { useState } from 'react'
import CardProfile from '../CardProfile'
import CollectionProfile from '../CollectionProfile'
import './style.css'
import ButtonCircle from '../ButtonCircle'

export default function Profile({ savedPexels }) {
  const pexels = savedPexels.map((pexel) => pexel.data)
  return (
    <div className="main">
      <div className="profile">
        <CardProfile />
        <div className="main-profile">
          <div className="profile-description-container">
            <div className="profile-description">
              <h2>About me</h2>
              <div className="profile-description-content">
                <ButtonCircle title="Add Description">+</ButtonCircle>
              </div>
            </div>
            <div className="profile-statistics">
              <h2>Statistics</h2>
              <div className="profile-description-content"></div>
            </div>
          </div>
          <CollectionProfile pexels={pexels} />
        </div>
      </div>
    </div>
  )
}
