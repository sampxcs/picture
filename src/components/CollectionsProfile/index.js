import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import ButtonCircle from '../ButtonCircle'
import CollectionsPlaceholder from '../Placeholders/CollectionsPlaceholder'
import Collection from '../Collection'
import { Link } from 'wouter'

export default function CollectionsProfile({ savedPexels }) {
  return (
    <div className='profile-collections'>
      <hr />
      <h2>Your Collections</h2>

      {savedPexels && !savedPexels.length ? null : savedPexels ? (
        <div className='profile-collections-content'>
          <Collection
            title={
              <h3>
                Saved
                <span>
                  <FontAwesomeIcon icon={faImages} /> {savedPexels.length}
                </span>
              </h3>
            }
            data={savedPexels}
            className={'card-collection-profile'}
          />
        </div>
      ) : (
        <div className='profile-collections-content'>
          <CollectionsPlaceholder />
        </div>
      )}
      <div className='profile-add-content'>
        <Link to='/explore'>
          <ButtonCircle title='Add Collection'>+</ButtonCircle>
        </Link>
      </div>
    </div>
  )
}
