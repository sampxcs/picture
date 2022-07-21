import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'
import UserContext from '../../context/UserContext'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, pushLocation] = useLocation()
  const { setIsLogin } = useContext(UserContext)

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    setIsLogin(true)
    pushLocation('/')
  }

  return (
    <form className="login-form" onSubmit={handelSubmit}>
      <h2>Welcome Back</h2>
      <h3>Log in to Nature to access your collections.</h3>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/log-out">Forgot your password?</Link>
      <button>
        Sing In
        <FontAwesomeIcon className="faArrow" icon={solid('arrow-right-to-bracket')} />
      </button>
      <p>
        Don't have an account?, <Link to="/log-out">Sign up and get started!</Link>
      </p>
    </form>
  )
}
