import React, { createContext, useState } from 'react'

import User from '../types/user.type'

interface Props {
  children: React.ReactNode
}
interface IUserContext {
  currentUser: User | null
  isAutheticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}
export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAutheticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setUser] = useState<User | null>(null)

  const loginUser = (user: User) => {
    setUser(user)
  }

  const logoutUser = () => {
    setUser(null)
  }

  const isAutheticated = currentUser !== null
  return (
    <UserContext.Provider
      value={{ currentUser, isAutheticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
