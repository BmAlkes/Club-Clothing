import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { CartContext } from '../../contexts/cart.context'
import { auth } from '../../config/firebase.config'

// Styles
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle
} from './Header.styles'
import { logout } from '../../Store/reducers/user/user.actions'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated, currentUser } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const { productsCount, toggleCart } = useContext(CartContext)

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logout())
    signOut(auth)
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        {isAuthenticated && (
          <HeaderItem>{`Welcome ${currentUser.firstName} ${currentUser.lastName}`}</HeaderItem>
        )}
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
        )}

        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
