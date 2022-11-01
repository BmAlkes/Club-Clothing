import React, { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'

import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/userContext'
import { CartContext } from '../../contexts/cart.context'

const Header = () => {
  const navigate = useNavigate()
  const { isAutheticated, currentUser } = useContext(UserContext)
  const { toggleCart, productsCount } = useContext(CartContext)

  const handleClick = () => {
    navigate('/login')
  }
  const handleEnter2 = () => {
    navigate('/')
  }
  const handleSignUp = () => {
    navigate('/Signup')
  }
  const handleExplore = () => {
    navigate('/Explore')
  }
  console.log(currentUser)
  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleEnter2}>CLUB CLOTHINGS</HeaderTitle>
      <HeaderItems>
        {isAutheticated && (
          <>
            <HeaderItem>{`Welcome ${currentUser?.firstName}`}</HeaderItem>
          </>
        )}
        <HeaderItem onClick={handleExplore}>Explorer</HeaderItem>
        {!isAutheticated && (
          <>
            <HeaderItem onClick={handleClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUp}>Create account</HeaderItem>
          </>
        )}
        {isAutheticated && (
          <>
            <HeaderItem onClick={() => signOut(auth)}>Logout</HeaderItem>
          </>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 10 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
