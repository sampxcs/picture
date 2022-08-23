import React from 'react'
import './style.css'

import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-item'>
          <h2>NATURE</h2>
          <h3>The beauthy of everyting.</h3>
          <ul>
            <li>
              <Link to='./'>Settings</Link>
            </li>
            <li>
              <Link to='./AboutDeveloper'>About Developer</Link>
            </li>
            <li>
              <Link to='./'>FAQ</Link>
            </li>
            <li>
              <a href='https://www.pexels.com' target='_blank' rel='noopener noreferrer'>
                Photos provided by Pexels
              </a>
            </li>
            <li>&copy; NATURE 2022</li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3>About</h3>

          <p>
            React Pexels App, is an application created only for study purposes and web development practices by Ian Rosales, to know more
            visit <Link to='/AboutDeveloper'>About Developer</Link>. Thank you very much for visiting and I hope you liked it.
          </p>
        </div>
        <div className='footer-item'>
          <h3>POPULARS</h3>
          <ul>
            <li>
              <Link to='/Explore/Seascapes%20nature'>Seascapes</Link>
            </li>
            <li>
              <Link to='/Explore/Underwater'>Underwater</Link>
            </li>
            <li>
              <Link to='/Explore/Cats'>Cats</Link>
            </li>
            <li>
              <Link to='/Explore/Cute%20Animals'>Cute Animals</Link>
            </li>
            <li>
              <Link to='/Explore/Birds%20Eye%20View'>Birds Eye View</Link>
            </li>
            <li>
              <Link to='/Explore/Space'>Space</Link>
            </li>
            <li>
              <Link to='/Explore/Macro'>Macro</Link>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3>BY LOCATION</h3>
          <ul>
            <li>
              <Link to='/Explore/Norway'>Norway</Link>
            </li>
            <li>
              <Link to='/Explore/Iceland'>Iceland</Link>
            </li>
            <li>
              <Link to='/Explore/Australia%20Nature'>Australia</Link>
            </li>
            <li>
              <Link to='/Explore/Brazil%20Nature'>Brazil</Link>
            </li>
            <li>
              <Link to='/Explore/China$20Nature'>China</Link>
            </li>
            <li>
              <Link to='/Explore/Philippines%20nature'>Philippines</Link>
            </li>
            <li>
              <Link to='/Explore/Madagascar%20Nature'>Madagascar</Link>
            </li>
            <li>
              <Link to='/Explore/South%20Africa%20Nature'>South Africa</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
