import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import Nav from './components/Nav'
import Explore from './pages/Explore'
import SearchExplore from './pages/SearchExplore'
import Detail from './pages/Detail'
import AboutDeveloper from './pages/AboutDeveloper'
import Error from './pages/Error'
import Login from './pages/Login'
import { PexelsContextProvaider } from './context/PexelsContext'
import { UserContextProvaider } from './context/UserContext'

function App() {
  return (
    <div className="App">
      <UserContextProvaider>
        <Nav />
        <PexelsContextProvaider>
          <Route path="/" component={Home} />
          <Route path="/log-in" component={Login} />
          <Route path="/Explore" component={Explore} />
          <Route path="/Explore/:keyword" component={SearchExplore} />
          <Route path="/AboutDeveloper" component={AboutDeveloper} />
          <Route path="/Detail/:id" component={Detail} />
          <Route path="/404" component={Error} />
        </PexelsContextProvaider>
      </UserContextProvaider>
    </div>
  )
}

export default App
