import React from 'react'
import { Route, Switch } from 'wouter'

import { PexelsContextProvaider } from './context/PexelsContext'

import Nav from './components/Nav'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ProfilePage from './pages/Profile'
import SettingsPage from './pages/Settings'
import Explore from './pages/Explore'
import SearchExplore from './pages/SearchExplore'
import Detail from './pages/Detail'
import AboutDeveloper from './pages/AboutDeveloper'
import FAQ from './pages/FAQ'
import Error from './pages/Error'
import { UserContextProvaider } from './context/UserContext'

function App() {
  return (
    <div className='App'>
      <UserContextProvaider>
        <Nav />
        <PexelsContextProvaider>
          <Switch>
            <Route path='/'>{(params) => <Home params={params} />}</Route>
            <Route path='/log-in' component={Login} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/reset-password' component={ResetPassword} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/settings/profile' component={SettingsPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route path='/Explore' component={Explore} />
            <Route path='/Explore/:keyword' component={SearchExplore} />
            <Route path='/Detail/:id' component={Detail} />
            <Route path='/AboutDeveloper' component={AboutDeveloper} />
            <Route path='/FAQ' component={FAQ} />
            <Route path='/:rest*' component={Error} />
          </Switch>
        </PexelsContextProvaider>
      </UserContextProvaider>
    </div>
  )
}

export default App
