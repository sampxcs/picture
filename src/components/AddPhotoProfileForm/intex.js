import React, { useState } from 'react'
import ButtonPrimary from '../ButtonPrimary'
import useUser from '../../hooks/useUser'
import Spinner from '../Spinner'
import './style.css'

export default function AddPhotoProfileForm({ setShowModal }) {
  const [drag, setDrag] = useState()
  const [photoProfile, setPhotoProfile] = useState()
  const [photoProfilePreview, setPhotoProfilePreview] = useState()
  const [loading, setLoading] = useState(false)
  const { user, updateProfile, uploadImage } = useUser()

  const handleChange = (e) => {
    setPhotoProfile(e.target.files[0])
    setPhotoProfilePreview(URL.createObjectURL(e.target.files[0]))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    uploadImage({ img: photoProfile })
      .then((downloadURL) => {
        updateProfile(user.userImpL, {
          photoURL: downloadURL,
        }).then(() => {
          setLoading(false)
          setShowModal(false)
        })
      })
      .catch((error) => {
        setLoading(false)
        console.log('clm', error)
      })
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('hover')
    setDrag('drag-hover')
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('leave')
    setDrag(null)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDrag(null)
    setPhotoProfile(e.dataTransfer.files[0])
    setPhotoProfilePreview(URL.createObjectURL(e.dataTransfer.files[0]))
  }

  return (
    <form className="add-photo-profile-form" onSubmit={handleSubmit}>
      <h2>Select your profile photo</h2>
      <div className="drag-zone">
        {photoProfile ? (
          <img src={photoProfilePreview} alt={user.name} title={user.name} />
        ) : (
          <>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              multiple
              onDragLeave={handleDragLeave}
              onDragEnter={handleDragEnter}
              onChange={handleChange}
              onDrop={handleDrop}
            />
            <label htmlFor="file" className={drag}>
              Drag your files or click here
            </label>
          </>
        )}
      </div>
      <ButtonPrimary target="submit" disabled={!photoProfile || loading}>
        {loading ? <Spinner /> : 'Set New Profile Picture'}
      </ButtonPrimary>
      <ButtonPrimary type="button" disabled={!photoProfile} onClick={() => setPhotoProfile(undefined)}>
        Change
      </ButtonPrimary>
    </form>
  )
}
