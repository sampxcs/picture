import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { UserContextProvaider } from './context/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserContextProvaider>
      <App />
    </UserContextProvaider>
  </React.StrictMode>
)

reportWebVitals()
