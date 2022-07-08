import React from 'react';
import { Route } from 'wouter'
import Home from './pages/Home'
import Explore from './pages/Explore'

function App() {
  return (
    <div className="App">
      <Route 
        path="/"
        component={Home}
      />
      <Route
        path='/Explore/:keyword'
        component={Explore}
      />
    </div>
  );
}

export default App;
