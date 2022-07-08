import React from "react";
import { Route } from "wouter";
import ListOfCards from "../ListOfCards";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="list-of-cards">
        <Route
          path="/Explore/:keyword"
          component={ListOfCards}
        />
        <Route
          path="/"
          component={ListOfCards}
        />
      </div>
    </div>
  );
}
