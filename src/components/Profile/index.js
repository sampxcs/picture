import React from 'react'
import CardProfile from '../CardProfile'
import CollectionsProfile from '../CollectionsProfile'
import './style.css'
import ButtonCircle from '../ButtonCircle'

export default function Profile({ savedPexels }) {
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
          <CollectionsProfile savedPexels={savedPexels} />
        </div>
      </div>
    </div>
  )
}
