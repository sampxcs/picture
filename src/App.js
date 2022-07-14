import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Explore from "./pages/Explore"
import SearchExplore from "./pages/SearchExplore";
import Detail from "./pages/Detail";
import AboutDeveloper from "./pages/AboutDeveloper"
import { PexelsContextProvaider } from "./context/PexelsContext";

function App() {
  return (
    <div className="App">
      <Nav />
      <PexelsContextProvaider>
        <Route path="/" component={Home} />
        <Route path="/Explore" component={Explore} />
        <Route path="/Explore/:keyword" component={SearchExplore} />
        <Route path="/AboutDeveloper" component={AboutDeveloper} />
        <Route path="/Detail/:id" component={Detail} />
      </PexelsContextProvaider>
    </div>
  );
}

export default App;
