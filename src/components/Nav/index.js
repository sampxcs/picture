import React from "react";
import "./Nav.css";
import SearchForm from "../SearchForm";
import NavList from "../NavList";
import { Link } from "wouter";

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-logo" title="Nature">
        NATURE
      </Link>
      <NavList />
      <SearchForm className={"nav-form"} />
    </nav>
  );
}
