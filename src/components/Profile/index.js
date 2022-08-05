import React from 'react'
import useUser from '../../hooks/useUser'
import CardProfile from '../CardProfile'
import './style.css'

export default function Settings() {
  return (
    <div className='main'>
      <div className='profile'>
        <CardProfile />
        <div className='main-profile'>
          <div className='profile-description-container'>
            <div className='profile-description'>
              <h2>About me</h2>
              <div className='profile-description-content'>
                <button title='Add Description' className='add-btn'>
                  +
                </button>
              </div>
            </div>
            <div className='profile-statistics'>
              <h2>Statistics</h2>
              <div className='profile-description-content'></div>
            </div>
          </div>
          <div className='profile-collections'>
            <h2>
              <span>Your Collections</span>
            </h2>
            <div className='profile-collections-content'>
              <button title='Add Collection' className='add-btn'>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
