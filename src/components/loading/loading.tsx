import React, { FunctionComponent } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { LoadingContainer } from './loading.styles'

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <HashLoader size={60} />
    </LoadingContainer>
  )
}

export default Loading
