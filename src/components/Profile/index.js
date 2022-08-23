import React from 'react'
import './style.css'

import { Link } from 'wouter'

import ButtonCircle from '../ButtonCircle'
import CardProfile from '../CardProfile'
import CollectionsProfile from '../CollectionsProfile'

export default function Profile({ user, userStatusCode }) {
  return (
    <div className='main'>
      <div className='profile'>
        <CardProfile user={user} userStatusCode={userStatusCode} />
        <div className='main-profile'>
          <div className='profile-description-container'>
            <div className='profile-description'>
              <h2>About me</h2>
              <div className='profile-description-content'>
                {user.profileInfo.bio ? (
                  <div className='description-text'>
                    {user.profileInfo.bio.split('\n').map((paragraph) => (
                      <p>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <Link to='/settings/profile'>
                    <ButtonCircle title='Add Description'>+</ButtonCircle>
                  </Link>
                )}
              </div>
            </div>
            <div className='profile-statistics'>
              <h2>Statistics</h2>
              <div className='profile-description-content'></div>
            </div>
          </div>
          <CollectionsProfile savedPexels={user.savedPexels} />
        </div>
      </div>
    </div>
  )
}
