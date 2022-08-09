import React from 'react'
import Card from '../Card'
import ButtonCircle from '../ButtonCircle'

export default function CollectionProfile({ pexels }) {
  return (
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
        <ButtonCircle title='Add Description'>+</ButtonCircle>
      </div>
    </div>
  )
}
