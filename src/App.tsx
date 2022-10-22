import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/userContext'
import { getDocs, query, collection, where } from 'firebase/firestore'

// Pages
import Home from './Pages/Home/home.page'
import Login from './Pages/Login/Login.page'
import SignUp from './Pages/SignUp/SignUp'
import { userConverter } from './converters/firebase.converters'

const App: FunctionComponent = () => {
  const [isInitialized, setInitialState] = useState(true)
  const { isAutheticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAutheticated && !user

    if (isSigningOut) {
      logoutUser()
      return setInitialState(false)
    }
    const isSignIn = !isAutheticated && user
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFireStore = querySnapshot.docs[0]?.data()
      loginUser(userFromFireStore)
      return setInitialState(false)
    }
    return setInitialState(false)
  })

  if (isInitialized) return null

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
