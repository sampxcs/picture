import React from "react";
import './style.css'

import { Link } from 'wouter'

export default function HeaderMobileNav () {
    return <div className="header-mobile-nav">
    <ul>
      <li>
        <Link to="/Explore/Landscape">Landscape</Link>
      </li>
      <li>
        <Link to="/Explore/Forest">Forest</Link>
      </li>
      <li>
        <Link to="/Explore/Ocean">Ocean Life</Link>
      </li>
      <li>
        <Link to="/Explore/Sky">Sky</Link>
      </li>
      <li>
        <Link to="/Explore/Flowers">Flowers</Link>
      </li>
      <li>
        <Link to="/Explore/Seascapes%20nature">Seascapes</Link>
      </li>
      <li>
        <Link to="/Explore/Underwater">Underwater</Link>
      </li>
      <li>
        <Link to="/Explore/Cats">Cats</Link>
      </li>
      <li>
        <Link to="/Explore/Cute%20Animals">Cute Animals</Link>
      </li>
      <li>
        <Link to="/Explore/Birds%20Eye%20View">Birds Eye View</Link>
      </li>
      <li>
        <Link to="/Explore/Space">Space</Link>
      </li>
      <li>
        <Link to="/Explore/Macro">Macro</Link>
      </li>
    </ul>
  </div>
}