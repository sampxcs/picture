import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import CardProfile from '../CardProfile'
import './style.css'

export default function Settings() {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <div className='main'>
          <div className='profile'>
            <CardProfile />
          </div>
        </div>
      ) : null}
    </>
  )
}
