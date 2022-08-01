import React from 'react'
import { Link } from 'wouter'
import './style.css'

export default function VerificationEmailAlert() {
  return (
    <div className="alert-container">
      <h1>Verification email sent!</h1>
      <h2>Please check your email to continue.</h2>
      <p>if you don't see the email check your span tray</p>
      <Link to="./">Back to home</Link>
    </div>
  )
}
