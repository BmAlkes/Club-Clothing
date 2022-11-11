import React, { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import Header from '../components/header/header'
import Loading from '../components/loading/loading'

const AuthenticationGuard: FunctionComponent = ({ children }) => {
  const { isAutheticated } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAutheticated) {
      setTimeout(() => {
        navigate('/login')
      }, 7000)
    }
  }, [isAutheticated])
  if (!isAutheticated) {
    return (
      <>
        <Header />
        <Loading message="You need to be logged in to access this page. You will be redirected to the login page." />
      </>
    )
  }
  return <>{children}</>
}

export default AuthenticationGuard
