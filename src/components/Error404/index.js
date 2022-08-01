import React from 'react'
import { Link } from 'wouter'
import './style.css'
import { Helmet } from 'react-helmet'

export default function Error404() {
  return (
    <>
      <Helmet>
        <title>{`Error 404`}</title>
      </Helmet>
      <div className="error404">
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <h2>Oops! - Page not found</h2>
        <p>
          It seems that we did not find what you are looking for, the page you were <br /> looking for doesn't exist, isn't available or was
          loading incorrectly.
        </p>
        <img src="/leave.png" alt="leave" />
        <img src="/leave.png" alt="leave" />
        <Link to="/">Back to home :)</Link>
      </div>
    </>
  )
}
