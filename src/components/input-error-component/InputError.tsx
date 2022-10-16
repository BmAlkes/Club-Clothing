import React, { FunctionComponent } from 'react'
import { Interface } from 'readline'

// Styles
import { InputErrorMessageContainer } from './input-error.styles'

interface children {
  children: React.ReactNode
}

const InputErrorMessage: FunctionComponent<children> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
