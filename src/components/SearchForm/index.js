import React, { useState } from "react";
import "./SearchForm.css";
import { useLocation } from "wouter";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [location, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/Explore/${keyword}`);
    setKeyword("");
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={keyword}
        id="search"
        name="search"
        type="text"
        placeholder="Search"
      />
      <label htmlFor="search">
        <div className="search-icon">
          <span className="search-icon-circle"></span>
          <span className="search-icon-line"></span>
        </div>
      </label>
    </form>
  );
}
