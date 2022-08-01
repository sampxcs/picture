import React from 'react'
import useUser from '../../hooks/useUser'
import './style.css'

export default function Settings() {
  const { user } = useUser()
  console.log(user)
  return (
    <>
      {user ? (
        <>
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
        </>
      ) : null}
    </>
  )
}
