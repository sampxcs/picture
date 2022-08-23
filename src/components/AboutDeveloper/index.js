import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function AboutDeveloper() {
  return (
    <div className='main'>
      <div className='about-header'>
        <div className='header-card'>
          <h2>Hi there!</h2>
          <h1>I'm Ian Rosales</h1>
          <h2>Front End Developer</h2>
          <ul>
            <li>
              <a href='https://twitter.com/Sampxcs' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/iansrlx' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href='linkedin.com/in/ian-samuel-rosales-leon-38a5b3230' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href='https://github.com/Sampxcs' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className='header-img'>
          <img src='/IMG_20200905_211704_821.jpg' alt='Sampxcs' title='Sampxcs' />
        </div>
      </div>
      <div className='about-section'>
        <p className='about-nature'>
          Nature is an application created with React and based on the pexels api, in order to offer an almost infinite number of photos and
          videos, this web page is not developed for commercial purposes, it is simply a demonstration of ui design and rest api
          implementation using react, in a nice web page to see and interact
        </p>
        <img src='/Green-Leafs01.png' className='green-leafts-up' alt='green leafts' />
      </div>
      <div className='about-section'>
        <h2>About me.</h2> <br />
        <p>
          A UI designer and <span>Front-End</span> developer working remotely to create beautiful user interfaces that bring your product to
          life.
        </p>
        <br />
        <p>
          <span>Audiovisual production student,</span> I also work like a videomaker, editor and professional photographer. I spend my time
          researching, designing and creating.
        </p>
        <br />
        <p>
          Outside the office you will find me dreaming about music, playing the guitar and petting my <span>cats.</span>
        </p>
        <img src='/Green-Leafs01.png' className='green-leafts-down' alt='green leafts' />
      </div>
      <div className='about-section'>
        <h2>Last Projects.</h2> <br />
        <p>
          I've spent the past 5+ years working across different areas of digital design and <span>audiovisual production</span>; Front-End
          development, videomaker, marketing site pages, app UI/UX.
        </p>
        <p>
          These are my <span>last projects.</span>
        </p>
        <br />
        <p>
          You can see more in my{' '}
          <a href='https://sampxcs-portfolio.vercel.app' target='_blank' rel='noopener noreferrer'>
            Web Portfolio
          </a>
        </p>
      </div>
      <img src='/mountain-watercolor.jpg' className='mountain-watercolor' alt='mountains' />
    </div>
  )
}
