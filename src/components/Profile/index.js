import React, { useState } from 'react'
import CardProfile from '../CardProfile'
import usePexelsByIds from '../../hooks/usePexelsByIds'
import CollectionProfile from '../CollectionProfile'
import './style.css'
import ButtonCircle from '../ButtonCircle'

export default function Profile({ savedPexels }) {
  const ids = savedPexels.map((pexel) => pexel.data.pexelId)
  const { globalPexels } = usePexelsByIds({ ids })
  /* const pexels = globalPexels.map((pexel) => {
    pexel.then(pexel)
  }) */

  console.log('Pexels in Profile ===> ', globalPexels)

  /* if (globalPexels.length) */
  return (
    <div className='main'>
      <div className='profile'>
        <CardProfile />
        <div className='main-profile'>
          <div className='profile-description-container'>
            <div className='profile-description'>
              <h2>About me</h2>
              <div className='profile-description-content'>
                <ButtonCircle title='Add Description'>+</ButtonCircle>
              </div>
            </div>
            <div className='profile-statistics'>
              <h2>Statistics</h2>
              <div className='profile-description-content'></div>
            </div>
          </div>
          <CollectionProfile pexels={globalPexels} />
        </div>
      </div>
    </div>
  )
  return <header>CARGANDO...</header>
}
/*  return (
    <>
      {pexels.leng(
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
                  {pexels.map((id, src, photographer, photographer_url, alt, avg_color) => {
                    return (
                      <Card
                        className={'card-saved'}
                        key={id}
                        id={id}
                        src={src}
                        photographer={photographer}
                        photographer_url={photographer_url}
                        alt={alt}
                        avg_color={avg_color}
                      />
                    )
                  })}
                </div>
                <div className='profile-add-content'>
                  <button title='Add Collection' className='add-btn'>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )/*  : (
        <div className='main'>null</div>
      )} 
    </>
  ) */
