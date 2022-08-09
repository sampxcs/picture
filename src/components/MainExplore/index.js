import React from 'react'
import './style.css'

import {
  collectionsPhotosData,
  collectionsFireData,
  collectionsEarthData,
  collectionsAirData,
  collectionsWaterData,
} from './CollectionsData'

import SearchForm from '../SearchForm'
import Collection from '../Collection'

export default function MainExplore() {
  return (
    <div className='main-explore'>
      <div className='header-explore'>
        <div className='title-explore'>
          <h2>
            Discover the best royalty <br /> free images of nature & videos <br /> shared by creators.
          </h2>
          <img className='watercolor-leaves-right' src='/watercolorLeaves.png' alt='watercolor leave' />
          <img className='watercolor-leaves-left' src='/watercolorLeaves.png' alt='watercolor leave' />
        </div>
        <SearchForm className={'header-form'} />
      </div>
      <Collection title={'Popular Collections.'} data={collectionsPhotosData} />
      <Collection title={'In Water.'} data={collectionsWaterData} />
      <Collection title={'The Best Of Earth.'} data={collectionsEarthData} />
      <Collection title={'Air Life.'} data={collectionsAirData} />
      <Collection title={'Intense Fire.'} data={collectionsFireData} />
    </div>
  )
}

// src, alt, photographer, photographer_url, avg_color, className
/* <h2 className="title-collections">Amazing Videos.</h2>
      <div className="collections">
        {collectionsPhotosData.map(
          ({ className, title, id, src, alt, avg_color }) => (
            <div className="card-collection" key={id}>
              <Card
                className={className}
                title={title}
                id={id}
                src={src}
                alt={alt}
                avg_color={avg_color}
              />
            </div>
          )
        )}
      </div> */
