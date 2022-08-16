import React from 'react'
import CardProfile from '../CardProfile'
import CollectionsProfile from '../CollectionsProfile'
import './style.css'
import ButtonCircle from '../ButtonCircle'
import { Link } from 'wouter'

export default function Profile({ user }) {
  console.log(user.profileInfo.bio.split('\n'))
  return (
    <div className='main'>
      <div className='profile'>
        <CardProfile user={user} />
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
