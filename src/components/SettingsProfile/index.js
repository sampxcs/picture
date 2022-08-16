import React, { useEffect, useState } from 'react'
import SettingsNav from '../SettingsNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import ButtonCircle from '../ButtonCircle'
import useUser from '../../hooks/useUser'
import './style.css'
import ButtonPrimary from '../ButtonPrimary'
import PhotoProfile from '../PhotoProfile'

export default function SettingsProfile({ user }) {
  const [showModal, setShowModal] = useState(false)
  const [displayName, setDisplayName] = useState(user.profileInfo.displayName)
  const [email, setEmail] = useState(user.profileInfo.email)
  const [bio, setBio] = useState(user.profileInfo.bio)
  const [phoneNumber, setPhoneNumber] = useState(user.profileInfo.phoneNumber)
  const [location, setLocation] = useState(user.profileInfo.location)
  const [website, setWebsite] = useState(user.profileInfo.website)
  const [linkedin, setLinkedin] = useState(user.profileInfo.linkedin)
  const [twitter, setTwitter] = useState(user.profileInfo.twitter)
  const [instagram, setInstagram] = useState(user.profileInfo.instagram)
  const [facebook, setFacebook] = useState(user.profileInfo.facebook)

  const { updateProfileInfo } = useUser()

  const handelSubmit = (e) => {
    e.preventDefault()
    updateProfileInfo({
      user: user.userImpL,
      displayName: displayName,
      email: email,
      bio: bio,
      phoneNumber: phoneNumber,
      location: location,
      website: website,
      linkedin: linkedin,
      twitter: twitter,
      instagram: instagram,
      facebook: facebook,
    }).then(() => window.location.reload())
  }

  return (
    <div className='settings-main-content'>
      <h2 className='settings-main-title'>Edit profile</h2>
      <hr />
      <div className='setting-main-content-form'>
        <form className='settings-main-form' onSubmit={handelSubmit}>
          <div className='input-content'>
            <h3>User name</h3>
            <input
              type='text'
              placeholder='User name'
              autoCapitalize='words'
              value={displayName}
              required
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <small>Your name may appear around Nature where you contribute or are mentioned.</small>
          </div>
          <div className='input-content'>
            <h3>Public email</h3>
            <input type='email' placeholder='Enter your user name' value={email} required onChange={(e) => setEmail(e.target.value)} />
            {user.emailVerified ? (
              <small className='verified'>
                Verified email <FontAwesomeIcon icon={faCheckCircle} />
              </small>
            ) : (
              <small>
                Click here to <span className='not-verified'>verify your email</span>
              </small>
            )}
          </div>
          <div className='input-content'>
            <h3>About me</h3>
            <textarea
              placeholder='Brief description about you, your likes and your work'
              value={bio}
              autoCapitalize='sentences'
              onChange={(e) => setBio(e.target.value)}
            />
            <small>Brief description about you, your likes and your work</small>
          </div>
          <div className='input-content'>
            <h3>Phone number</h3>
            <input
              type='tel'
              placeholder='Add a phone number'
              autoComplete='tel'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <small>Phone number</small>
          </div>
          <div className='input-content'>
            <h3>Location</h3>
            <input
              type='text'
              placeholder='Location'
              value={location}
              autoComplete='country-name'
              autoCapitalize='words'
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className='input-content'>
            <h3>Website</h3>
            <input type='url' placeholder='URL of your website' value={website} onChange={(e) => setWebsite(e.target.value)} />
            <small>Enter the URL of your website</small>
          </div>
          <div className='input-content'>
            <h3>LinkEdin</h3>
            <input
              type='url'
              placeholder='Enter the URL of your LinkEdin profile'
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <small>URL of your LinkEdin profile</small>
          </div>
          <div className='input-content'>
            <h3>Twitter</h3>
            <input type='text' placeholder='Twitter username' value={twitter} onChange={(e) => setTwitter(e.target.value)} />
          </div>
          <div className='input-content'>
            <h3>Instagram</h3>
            <input type='text' placeholder='Instagram username' value={instagram} onChange={(e) => setInstagram(e.target.value)} />
          </div>
          <div className='input-content'>
            <h3>Facebook</h3>
            <input
              type='url'
              placeholder='Enter the URL of your Facebook profile'
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <small>URL of your Facebook profile</small>
          </div>
          <ButtonPrimary>Update profile</ButtonPrimary>
        </form>
        <PhotoProfile user={user} onClick={() => setShowModal(true)} />
      </div>
    </div>
  )
}
