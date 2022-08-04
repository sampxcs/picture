import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import CardProfile from '../CardProfile'
import './style.css'

export default function Settings() {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <div className="main">
          <div className="profile">
            <CardProfile />
            <div className="main-profile">
              <h1>
                <span>Your Collections</span>
                <span>filters</span>
              </h1>
              <div>
                <h2>Collection 01</h2>
              </div>
              <div>
                <h2>Collection 02</h2>
              </div>
              <div>
                <h2>Collection 03</h2>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
