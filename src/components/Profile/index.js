import React from 'react'
import CardProfile from '../CardProfile'
import useSinglePexel from '../../hooks/useSinglePexel'
import Card from '../Card'
import './style.css'

export default function Profile({ savedPexels }) {
  const id = savedPexels[0].data.pexelId
  const { loading, error, globalPexels } = useSinglePexel({ id })
  const { src, photographer, photographer_url, alt, avg_color } = globalPexels

  console.log(globalPexels)
  console.log(savedPexels)

  return (
    <div className="main">
      <div className="profile">
        <CardProfile />
        <div className="main-profile">
          <div className="profile-description-container">
            <div className="profile-description">
              <h2>About me</h2>
              <div className="profile-description-content">
                <button title="Add Description" className="add-btn">
                  +
                </button>
              </div>
            </div>
            <div className="profile-statistics">
              <h2>Statistics</h2>
              <div className="profile-description-content"></div>
            </div>
          </div>
          <div className="profile-collections">
            <h2>
              <span>Your Collections</span>
            </h2>
            <div className="profile-collections-content">
              <Card
                className={'card-main'}
                key={id}
                id={id}
                src={src}
                photographer={photographer}
                photographer_url={photographer_url}
                alt={alt}
                avg_color={avg_color}
              />
              <Card
                className={'card-main'}
                key={id}
                id={id}
                src={src}
                photographer={photographer}
                photographer_url={photographer_url}
                alt={alt}
                avg_color={avg_color}
              />
              <Card
                className={'card-main'}
                key={id}
                id={id}
                src={src}
                photographer={photographer}
                photographer_url={photographer_url}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
