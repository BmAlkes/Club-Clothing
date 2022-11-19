import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'

// Pages
import HomePage from './Pages/Home/home.page'
import LoginPage from './Pages/Login/Login.page'
import SignUpPage from './Pages/SignUp/SignUp'
import ExplorePage from './Pages/Explore/explore.page'
import CheckoutPage from './Pages/Checkout/checkout'

// Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firebase.converters'

// Components
import Loading from './components/loading/loading'
import CategoryDetailsPage from './Pages/Categorie details/categorie-details'
import Cart from './components/cart/cart.component'
import AuthenticationGuard from './guards/Authenticantion.guards'
import PaymentConfirmationPage from './Pages/Payment-confirmation/PaymentConfirmation'
import { loginUser, logout } from './Store/reducers/user/user.actions'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        dispatch(logout())

        return setIsInitializing(false)
      }

      const isSigningIn = !isAuthenticated && user

      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
