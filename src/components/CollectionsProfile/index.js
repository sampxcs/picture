import React from 'react'
import Card from '../Card'
import ButtonCircle from '../ButtonCircle'
import './style.css'
import CollectionsPlaceholder from '../Placeholders/CollectionsPlaceholder'
import Collection from '../Collection'
import GridPlaceholderMobile from '../Placeholders/GridPlaceholderMobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import CollectionsPlaceholderMobile from '../Placeholders/CollectionsPlaceholderMobile'

export default function CollectionsProfile({ savedPexels }) {
  return (
    <div className='profile-collections'>
      <hr />
      <h2>Your Collections</h2>
      <div className='profile-collections-content'>
        {savedPexels ? (
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
          />
        ) : window.innerWidth > 660 ? (
          <CollectionsPlaceholder />
        ) : (
          <CollectionsPlaceholderMobile />
        )}
      </div>
      <div className='profile-add-content'>
        <ButtonCircle title='Add Description'>+</ButtonCircle>
      </div>
    </div>
  )
}
