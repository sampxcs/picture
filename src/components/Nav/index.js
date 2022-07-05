import React from "react";
import "./Nav.css";
import SearchForm from "../SearchForm";
import NavList from "../NavList";

export default function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">NATURE</a>
      <NavList/>
      <SearchForm/>
    </nav>
  );
}
