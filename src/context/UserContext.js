import React, { useState } from 'react'

const UserContext = React.createContext({})

export function UserContextProvaider({ children }) {
  const [isLogged, setIsLogged] = useState(() => localStorage.getItem('logged'))

  return <UserContext.Provider value={{ isLogged, setIsLogged }}>{children}</UserContext.Provider>
}
export default UserContext
