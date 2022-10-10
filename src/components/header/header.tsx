import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'

import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHINGS</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorer</HeaderItem>
        <HeaderItem onClick={handleClick}>Login</HeaderItem>
        <HeaderItem>Create account</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 10 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
