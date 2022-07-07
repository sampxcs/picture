import React from "react";
import { Route } from "wouter";
import ListOfCards from "./../ListOfCards";

export default function Main() {
  return (
    <div className="main">
      <div className="list-of-cards">
        <Route 
          path="/explore/:keyword" 
          component={ListOfCards}
        />
      </div>
    </div>
  );
}
