import React, { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header'
import Loading from '../components/loading/loading'
import { useSelector } from 'react-redux'

const AuthenticationGuard: FunctionComponent = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 7000)
    }
  }, [isAuthenticated])
  if (!isAuthenticated) {
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
