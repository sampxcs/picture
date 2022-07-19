import React from 'react'
import './style.css'
import greenLeafts from './Green-Leafs01.png'
import imgPerfil from './IMG_20200905_211704_821.jpg'

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
                <i title='Twitter'>Twitter</i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/iansrlx' target='_blank' rel='noopener noreferrer'>
                <i title='Instagram'>Instagram</i>
              </a>
            </li>
            <li>
              <a href='linkedin.com/in/ian-samuel-rosales-leon-38a5b3230' target='_blank' rel='noopener noreferrer'>
                <i title='Linkedin'>Linkedin</i>
              </a>
            </li>
            <li>
              <a href='https://github.com/Sampxcs' target='_blank' rel='noopener noreferrer'>
                <i title='GitHub'>GitHub</i>
              </a>
            </li>
          </ul>
        </div>
        <div className='header-img'>
          <img src={imgPerfil} alt='Sampxcs' title='Sampxcs' />
        </div>
      </div>
      <div className='about-section'>
        <p className='about-nature'>
          Nature is an application created with React and based on the pexels api, in order to offer an almost infinite number of photos and
          videos, this web page is not developed for commercial purposes, it is simply a demonstration of ui design and rest api
          implementation using react, in a nice web page to see and interact
        </p>
        <img src={greenLeafts} className='green-leafts-up' />
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
        <img src={greenLeafts} className='green-leafts-down' />
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
          You can see more in my <a href='#'>Web Portfolio</a>
        </p>
      </div>
    </div>
  )
}
