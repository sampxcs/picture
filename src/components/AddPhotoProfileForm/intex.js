import React, { useState } from 'react'
import ButtonPrimary from '../ButtonPrimary'
import useUser from '../../hooks/useUser'
import './style.css'

export default function AddPhotoProfileForm({ setShowModal }) {
  const [photoProfile, setPhotoProfile] = useState()
  const [photoProfilePreview, setPhotoProfilePreview] = useState()
  const { user, updateProfile, uploadImage } = useUser()

  const handelChange = (e) => {
    setPhotoProfile(e.target.files[0])
    setPhotoProfilePreview(URL.createObjectURL(e.target.files[0]))
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    uploadImage({ img: photoProfile })
      .then((downloadURL) => {
        updateProfile(user, {
          photoURL: downloadURL,
        }).then(() => {
          setShowModal(false)
          console.log('ahora si nojoda')
        })
      })
      .catch((error) => {
        console.log('clm', error)
      })
  }

  return (
    <form className="add-photo-profile-form" onSubmit={handelSubmit}>
      <h2>Select your profile photo</h2>
      <div className="drag-zone">
        {photoProfile ? (
          <img src={photoProfilePreview} alt={user.name} title={user.name} />
        ) : (
          <label htmlFor="file">Drag your files or click here</label>
        )}
      </div>
      <input type="file" id="file" name="file" onChange={handelChange} />
      <ButtonPrimary target="submit" disabled={!photoProfile}>
        Set New Profile Picture
      </ButtonPrimary>
      <ButtonPrimary type="button" disabled={!photoProfile} onClick={() => setPhotoProfile(undefined)}>
        Change
      </ButtonPrimary>
    </form>
  )
}
