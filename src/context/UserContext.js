import React, { useState } from 'react'

const UserContext = React.createContext({})

export function UserContextProvaider({ children }) {
  const [isLogin, setIsLogin] = useState(false)

  return <UserContext.Provider value={{ isLogin, setIsLogin }}>{children}</UserContext.Provider>
}
export default UserContext
