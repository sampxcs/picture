import React from "react";
import './SearchForm.css'

export default function SearchForm() {
  return (
    <form className="search-form">
      <input id="search" name="search" type="text" placeholder="Search" />
      <label htmlFor="search">
        <div className="search-icon">
          <span className="search-icon-circle"></span>
          <span className="search-icon-line"></span>
        </div>
      </label>
    </form>
  );
}
