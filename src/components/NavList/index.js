import React from "react";
import "./NavList.css";

export default function NavList() {
  return (
    <ul className="nav-ul">
      <li>
        <a href="#">POSTS</a>
        <div className="nav-ul-list">
          <ul>
            <li>
              <a href="">Discover Photos</a>
            </li>
            <li>
              <a href="">Beautiful Videos</a>
            </li>
            <li>
              <a href="">Challenges</a>
            </li>
            <li>
              <a href="">Nature Blog</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="/Explore">EXPLORE</a>
        <div className="nav-ul-list">
          <ul>
            <li>
              <a href="">Landscape</a>
            </li>
            <li>
              <a href="">Forest</a>
            </li>
            <li>
              <a href="">Animals</a>
            </li>
            <li>
              <a href="">Dark</a>
            </li>
            <li>
              <a href="">Sky</a>
            </li>
            <li>
              <a href="">Flowers</a>
            </li>
            <li>
              <a href="">Beach</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">ACTIVITY</a>
      </li>
      <li>
        <a href="#">PROFILE</a>
        <div className="nav-ul-list profile">
          <ul>
            <li>
              <a href="">Your Collections</a>
            </li>
            <li>
              <a href="">Change Lenguage</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">About Developer</a>
            </li>
            <hr />
            <li>
              <a href="https://www.pexels.com" target="_blank">
                Photos provided by Pexels{" "}
                <img src="https://images.pexels.com/lib/api/pexels.png" />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
