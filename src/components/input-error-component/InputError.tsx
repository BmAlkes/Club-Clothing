import { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error.styles'

const InputErrorMessage: FunctionComponent = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
