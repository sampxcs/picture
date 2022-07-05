import React from 'react';
import { Route } from 'wouter'
import Home from './pages/Home'
import Explore from './pages/Explore'

function App() {
  return (
    <div className="App">
      <Route path="/"><Home/></Route>
      <Route path="/explore"><Explore/></Route>
    </div>
  );
}

export default App;
