import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './config/firebase.config'

// Pages
import Home from './Pages/Home/home.page'
import Login from './Pages/Login/Login.page'
import SignUp from './Pages/SignUp/SignUp'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
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
