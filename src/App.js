import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Explore from "./pages/Explore";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { PexelsContextProvaider } from "./context/PexelsContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "ian" }}>
      <div className="App">
        <Nav />
        <PexelsContextProvaider>
          <Route path="/" component={Home} />
          <Route path="/explore/:keyword" component={Explore} />
          <Route path="/detail/:id" component={Detail} />
        </PexelsContextProvaider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
