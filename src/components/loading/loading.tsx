import React, { FunctionComponent } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { LoadingContainer } from './loading.styles'
interface LoadingProps {
  message?: string
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <HashLoader size={60} />
    </LoadingContainer>
  )
}

export default Loading
