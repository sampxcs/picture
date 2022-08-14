import React from 'react'
import ButtonCircle from '../ButtonCircle'
import './style.css'
import CollectionsPlaceholder from '../Placeholders/CollectionsPlaceholder'
import Collection from '../Collection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

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
        <ButtonCircle title='Add Collection'>+</ButtonCircle>
      </div>
    </div>
  )
}
