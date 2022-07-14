import React from "react";
import "./Footer.css";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>NATURE</h2>
        <h3>The beauthy of everyting.</h3>
        <ul>
          <li><Link to="./">Settings</Link></li>
          <li><Link to="./">About Developer</Link></li>
          <li><Link to="./">FAQ</Link></li>
          <li><a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" >
            Photos provided by Pexels
          </a></li>
          <li>&copy; NATURE 2022</li>
        </ul>
      </div>
      <div>
        <p>
          React Pexels App, is an application created only for study purposes and web development practices by Ian Rosales, to know more visit <Link to="/AboutDeveloper">About Developer</Link>. Thank you very much for visiting and I hope you liked it.
        </p>
      </div>
      <div>
        <h3>POPULARS</h3>
        <ul>
          <li><Link to="/Explore/Landscape">Landscape</Link></li>
          <li><Link to="/Explore/Forest">Forest</Link></li>
          <li><Link to="/Explore/Animals">Animals</Link></li>
          <li><Link to="/Explore/Dark%20Nature">Dark</Link></li>
          <li><Link to="/Explore/Sky">Sky</Link></li>
          <li><Link to="/Explore/Flowers">Flowers</Link></li>
          <li><Link to="/Explore/Beach">Beach</Link></li>
        </ul>
      </div>
      <div>
        <h3>BY LOCATION</h3>
        <ul>
          <li><Link to="/Explore/Norway">Norway</Link></li>
          <li><Link to="/Explore/Iceland">Iceland</Link></li>
          <li><Link to="/Explore/Australia%20Nature">Australia</Link></li>
          <li><Link to="/Explore/Brazil%20Nature">Brazil</Link></li>
          <li><Link to="/Explore/China$20Nature">China</Link></li>
          <li><Link to="/Explore/Philippines%20nature">Philippines</Link></li>
          <li><Link to="/Explore/Madagascar%20Nature">Madagascar</Link></li>
          <li><Link to="/Explore/South%20Africa%20Nature">South Africa</Link></li>
        </ul>
      </div>
    </footer>
  );
}
