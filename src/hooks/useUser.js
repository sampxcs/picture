import { useCallback, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function useUser() {
  const { isLogged, setIsLogged } = useContext(UserContext)

  const signup = useCallback(
    ({ firstname, lastname, email, username, password }) => {
      console.log(firstname, lastname, email, username, password)
      const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
      }
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('logged', true)
        setIsLogged(true)
      } else {
        alert('ya existe un usuario')
      }
    },
    [setIsLogged]
  )

  const login = useCallback(
    ({ username, password }) => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user.username === username) {
        if (user.password === password) {
          localStorage.setItem('logged', true)
          setIsLogged(true)
          window.location.reload()
        } else alert('password error')
      } else alert('username error')
    },
    [setIsLogged]
  )

  const logout = useCallback(() => {
    setIsLogged(false)
    localStorage.removeItem('logged')
    window.location.reload()
  }, [setIsLogged])

  return { isLogged, signup, login, logout }
}
