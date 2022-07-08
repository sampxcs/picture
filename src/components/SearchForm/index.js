import React from "react";
import './SearchForm.css'
import { useLocation } from "wouter";


export default function SearchForm() {
  const [ location, setLocation ] = useLocation()

  const submitForm = e => {
    e.preventDefault()
    setLocation(`/Explore/${e.target[0].value}`)
  }

  return (
    <form className="search-form" onSubmit={submitForm}>
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
