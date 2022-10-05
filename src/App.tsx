import { FunctionComponent, useState } from 'react'

// components
import Header from './components/header/header'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <Header />
}

export default App
