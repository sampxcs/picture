import React, { useState } from 'react'

const ActiveContext = React.createContext({})

export function ActiveContextProvaider({ children }) {
  const [isActive, setIsActive] = useState(false)

  return <ActiveContext.Provider value={{ isActive, setIsActive }}>{children}</ActiveContext.Provider>
}
export default ActiveContext
