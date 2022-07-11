import React from "react";
import "./Header.css";
import plantImg from "./tree.png";

export default function Header() {
  return (
    <header>
      <div className="header-title">
        <h1>
          <span>N</span>A<span>T</span>U<span>R</span>E
        </h1>
        <h3>The Beauty of Everything</h3>
        <img src={plantImg} alt="Nature" title="Nature" className="img-plant" />
      </div>
    </header>
  );
}
