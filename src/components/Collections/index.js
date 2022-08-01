import React from 'react'
import './style.css'
import Card from '../Card'
import {
  collectionsPhotosData,
  collectionsFireData,
  collectionsEarthData,
  collectionsAirData,
  collectionsWaterData,
} from './CollectionsData'
import SearchForm from '../SearchForm'

export default function Collections() {
  return (
    <div className="main-explore">
      <div className="header-explore">
        <div className="title-explore">
          <h2>
            Discover the best royalty <br /> free images of nature & videos <br /> shared by creators.
          </h2>
          <img className="watercolor-leaves-right" src="/watercolorLeaves.png" alt="watercolor leave" />
          <img className="watercolor-leaves-left" src="/watercolorLeaves.png" alt="watercolor leave" />
        </div>
        <SearchForm className={'header-form'} />
      </div>
      <h2 className="title-collections">Popular Collections.</h2>
      <div className="collections">
        {collectionsPhotosData.map(({ className, title, id, src, alt, avg_color }) => (
          <div className="card-collection" key={id}>
            <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
          </div>
        ))}
      </div>
      {/* <h2 className="title-collections">Amazing Videos.</h2>
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
      </div> */}
      <h2 className="title-collections">In Water.</h2>
      <div className="collections">
        {collectionsWaterData.map(({ className, title, id, src, alt, avg_color }) => (
          <div className="card-collection" key={id}>
            <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
          </div>
        ))}
      </div>
      <h2 className="title-collections">The Best Of Earth.</h2>
      <div className="collections">
        {collectionsEarthData.map(({ className, title, id, src, alt, avg_color }) => (
          <div className="card-collection" key={id}>
            <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
          </div>
        ))}
      </div>
      <h2 className="title-collections">Air Life.</h2>
      <div className="collections">
        {collectionsAirData.map(({ className, title, id, src, alt, avg_color }) => (
          <div className="card-collection" key={id}>
            <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
          </div>
        ))}
      </div>
      <h2 className="title-collections">Intense Fire.</h2>
      <div className="collections">
        {collectionsFireData.map(({ className, title, id, src, alt, avg_color }) => (
          <div className="card-collection" key={id}>
            <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
          </div>
        ))}
      </div>
    </div>
  )
}

// src, alt, photographer, photographer_url, avg_color, className
