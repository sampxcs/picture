import React from 'react'
import CardProfile from '../CardProfile'
import CollectionsProfile from '../CollectionsProfile'
import './style.css'
import ButtonCircle from '../ButtonCircle'
import { Link } from 'wouter'

export default function EditProfile({ savedPexels }) {
  return (
    <div className='main'>
      <div className='profile'>
        <CardProfile />
        <div className='main-profile'>
          <div className='profile-description-container'>
            <div className='profile-description'>
              <h2>About me</h2>
              <div className='profile-description-content'>
                <Link to='/edit-profile'>
                  <ButtonCircle title='Add Description'>+</ButtonCircle>
                </Link>
              </div>
            </div>
            <div className='profile-statistics'>
              <h2>Statistics</h2>
              <div className='profile-description-content'></div>
            </div>
          </div>
          <CollectionsProfile savedPexels={savedPexels} />
        </div>
      </div>
    </div>
  )
}
